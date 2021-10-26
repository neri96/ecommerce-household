import { useEffect } from 'react';

import Modal from '../../includes/Modal';

import useAuth from '../../../hooks/useAuth';
import useIsMount from '../../../hooks/useInMount';

import * as S from './style';

import { ModalTypes, Methods, FetchType } from '../../../ts/types';

import { registerSchema } from '../../../constants/validation';

import { setUserData } from '../../../utils/storeData';

const Register = ({ handleAuth }: { handleAuth: () => void }) => {
    const { value, errors, handleChange, handleFocus, handleSubmit, handleModal, fetchedState } = useAuth(
        ModalTypes.REGISTER,
        { 
            name: '', 
            phone: '', 
            email: '',
            password: '', 
            confirmPassword: '' 
        }, 
        registerSchema
    );

    const { loading, data } = fetchedState;

    const isMount = useIsMount();

    useEffect(() => {
        if(isMount) {
            return;
        } else {
            const { userInfo } = data;

            setUserData(userInfo);
            handleAuth();
        }
    }, [data]);

    return (
        <Modal handleModal={handleModal} overlay>
            <form onSubmit={(e) => handleSubmit(e, '/auth/register', Methods.POST, FetchType.AUTH)}>
                <S.ModalHeader>
                    <h3>Регистрация</h3>
                </S.ModalHeader>
                <S.Input>
                    {errors.name &&
                        <span className='error'>{errors.name}</span>
                    }
                    <input 
                        type='text'
                        name='name'
                        placeholder='Имя'
                        onChange={handleChange}
                        onFocus={handleFocus}
                        value={value.name}
                    />
                </S.Input>
                <S.Input>
                    {errors.phone &&
                        <span className='error'>{errors.phone}</span>
                    }
                    <input 
                        type='text'
                        name='phone'
                        placeholder='Номер телефона'
                        onChange={handleChange}
                        onFocus={handleFocus}
                        value={value.phone}
                    />
                </S.Input>
                <S.Input>
                    {errors.email &&
                        <span className='error'>{errors.email}</span>
                    }
                    <input 
                        type='text'
                        name='email'
                        placeholder='Электронная почта'
                        onChange={handleChange}
                        onFocus={handleFocus}
                        value={value.email}
                    />
                </S.Input>
                <S.Input>
                    {errors.password &&
                        <span className='error'>{errors.password}</span>
                    }
                    <input 
                        type='password'
                        name='password'
                        placeholder='Пароль'
                        onChange={handleChange}
                        onFocus={handleFocus}
                        value={value.password}
                    />
                </S.Input>
                <S.Input>
                    {errors.confirmPassword &&
                        <span className='error'>{errors.confirmPassword}</span>
                    }
                    <input 
                        type='password'
                        name='confirmPassword'
                        placeholder='Подтвердите Пароль'
                        onChange={handleChange}
                        onFocus={handleFocus}
                        value={value.confirmPassword}
                    />
                </S.Input>
                <S.Button>
                    <button type='submit' disabled={loading}>
                        {loading ?
                            <img src='./loading-button.svg' /> :
                            'Зарегистрироваться'
                        }
                    </button>
                </S.Button>
            </form>
        </Modal>
    )
}

export default Register;