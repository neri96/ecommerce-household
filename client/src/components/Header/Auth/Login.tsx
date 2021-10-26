import { useEffect } from 'react';

import Modal from '../../includes/Modal';

import useAuth from '../../../hooks/useAuth';
import useIsMount from '../../../hooks/useInMount';

import { ModalTypes, Methods, FetchType } from '../../../ts/types';

import * as S from './style';

import { loginSchema } from '../../../constants/validation';
import { setUserData } from '../../../utils/storeData';

const Login = ({ handleAuth }: { handleAuth: () => void }) => {
    const { value, errors, handleChange, handleFocus, handleSubmit, handleModal, fetchedState } = useAuth(
        ModalTypes.LOGIN,
        {
            name: '', 
            password: '' 
        }, 
        loginSchema
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
            <form onSubmit={(e) => handleSubmit(e, '/auth/login', Methods.POST, FetchType.AUTH)}>
                <S.ModalHeader>
                    <h3>Вход</h3>
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
                <S.Button>
                    <button type='submit' disabled={loading}>
                        {loading ?
                            <img src='/loading-button.svg' /> :
                            'Войти'
                        }
                    </button>
                </S.Button>
            </form>
        </Modal>
    )
}

export default Login;