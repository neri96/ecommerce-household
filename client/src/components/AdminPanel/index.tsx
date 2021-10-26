import { useState, useLayoutEffect, ChangeEvent, FormEvent } from 'react';
import { useLocation, useHistory } from 'react-router';

import Modal from '../includes/Modal';
import Category from './Category';
import FadingComponent from '../includes/FadingComponent';
import SuccessMsg from './SuccessMsg';

import useFetch from '../../hooks/useFetch';

import { getUserData } from '../../utils/storeData';

import * as S from './style';

import { ModifyType, FetchType, Methods, Roles } from '../../ts/types';

interface AdminPanelProps {
    type: ModifyType;
    itemValue?: any;
}

const initialValue = {
    name: '',
    category: '',
    images: [],
    price: '',
    quantity: 1, 
    description: ''   
}

const AdminPanel = () => {
    const history = useHistory();

    useLayoutEffect(() => {
        const userData = getUserData();

        if(userData) {
            if(Number(userData.role) !== Roles.ADMIN) {
                history.push('/');
            }
        } else history.push('/');
    }, []);

    const location = useLocation();

    const type = location.state ? (location.state as AdminPanelProps).type : ModifyType.ADD; 
    const itemValue = location.state ? (location.state as AdminPanelProps).itemValue : {};
    
    const [value, setValue] = useState(type === ModifyType.EDIT ? itemValue : initialValue);
    const [showMsg, setShowMsg] = useState<boolean>(false);

    const { response, sendRequest } = useFetch(FetchType.FETCH_MSG);
    console.log(response);
    
    const handleMsgVis = () => setShowMsg(!showMsg);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await sendRequest({
            path: `/products/${type === ModifyType.EDIT ? `update/${itemValue._id}` : 'create'}`,
            method: type === ModifyType.EDIT ? Methods.PATCH : Methods.POST,
            value,
            authReq: true
        })

        handleMsgVis();

        if(type === ModifyType.ADD) {
            setValue(initialValue);
        }
    }

    return (
        <S.AdminPanel>
            <FadingComponent fadeIn={showMsg}>
                <SuccessMsg 
                    message={response.data.message}
                    showMsg={showMsg} 
                    handleMsgVis={handleMsgVis} 
                />
            </FadingComponent>
            <Modal>
                <form onSubmit={handleSubmit}>
                    <S.ModalHeader>
                        <h3>{type === ModifyType.EDIT ? 'Изменить товар' : 'Добавить товар'}</h3>
                    </S.ModalHeader>
                    <S.Input>
                        {/* {errors.name &&
                            <span>{errors.name}</span>
                        } */}
                        <span className='label'>Название</span>
                        <input 
                            type='text'
                            name='name'
                            onChange={handleChange}
                            onFocus={() => {}}
                            value={value.name}
                        />
                    </S.Input>
                    <S.Input>
                        {/* {errors.name &&
                            <span>{errors.name}</span>
                        } */}
                        <span className='label'>Категория</span>
                        <Category value={value} setValue={setValue} />         
                    </S.Input>
                    <S.Input>
                        {/* {errors.name &&
                            <span>{errors.name}</span>
                        } */}
                        <span className='label'>Изображения</span>
                        <input 
                            type='text'
                            name='images'
                            onChange={handleChange}
                            onFocus={() => {}}
                            value={value.images}
                        />
                    </S.Input>
                    <S.Input>
                        {/* {errors.name &&
                            <span>{errors.name}</span>
                        } */}
                        <span className='label'>Цена</span>
                        <input 
                            type='text'
                            name='price'
                            onChange={handleChange}
                            onFocus={() => {}}
                            value={value.price}
                        />
                    </S.Input>
                    <S.Input>
                        {/* {errors.name &&
                            <span>{errors.name}</span>
                        } */}
                        <span className='label'>Количество</span>
                        <input 
                            type='number'
                            name='quantity'
                            onChange={handleChange}
                            onFocus={() => {}}
                            value={value.quantity}
                        />
                    </S.Input>
                    <S.Input>
                        {/* {errors.name &&
                            <span>{errors.name}</span>
                        } */}
                        <span className='label'>Описание</span>
                        <input 
                            type='text'
                            name='description'
                            onChange={handleChange}
                            onFocus={() => {}}
                            value={value.description}
                        />
                    </S.Input>
                    <S.Button>
                        <button type='submit' disabled={false}>
                            {false ?
                                <img src='/loading-button.svg' /> :
                                type === ModifyType.EDIT ? 'Обновить' : 'Добавить'
                            }
                        </button>
                    </S.Button>
                </form>
            </Modal>
        </S.AdminPanel>
    )
}

export default AdminPanel;