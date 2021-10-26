import { useContext } from 'react';

import Modal from '../includes/Modal';
import useFetch from '../../hooks/useFetch';

import { FetchItemsDetails } from '../../context';

import { ModalHeader, Button } from '../includes/Modal/style';

import { FetchType, Methods } from '../../ts/types';

const Delete = ({ productId, handleDel }: any) => {
    const { getItems } = useContext(FetchItemsDetails);
    const { sendRequest } = useFetch(FetchType.FETCH_MSG);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        await sendRequest({
            path: `/products/remove/${productId}`,
            method: Methods.DELETE,
            authReq: true
        })
        
        getItems();
        handleDel();
    }

    return (
        <Modal>
            <form onSubmit={handleSubmit}>
                <ModalHeader>
                    <span>Вы уверены?</span>
                </ModalHeader>
                <Button>
                    <button type='submit'>Да</button>
                </Button>
                <Button onClick={handleDel}>
                    <button>Нет</button>
                </Button>
            </form>
        </Modal>
    )
}

export default Delete;