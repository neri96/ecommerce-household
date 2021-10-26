import { useContext } from 'react';

import { useSelector } from 'react-redux';

import FadingComponent from '../../../includes/FadingComponent';
import Modal from '../../../includes/Modal';
import useToggleModal from '../../../../hooks/useToggleModal';

import { ProductDetailsCtx } from '../../../../context';

import { ModalTypes } from '../../../../ts/types';

import * as S from './style';

const ProductFooter = () => {
    const modalState = useSelector((state: any) => state.modalState);
    const { productDetails: { description }} = useContext(ProductDetailsCtx);

    const { toggleModal } = useToggleModal();

    const handleModal = () => {
        toggleModal(ModalTypes.DESCRIPTION)
    }
    
    return (
        <S.ProductDataFooter>            
            <div className='product-descr'>
                <h3 onClick={handleModal}>Открыть описание</h3>
                <FadingComponent fadeIn={modalState.description}>
                    <Modal handleModal={handleModal} modalWidth={500}>
                        <S.ProductDescrWrap>
                            <S.ProductDescrBody>
                                <span>{description}</span>
                            </S.ProductDescrBody>
                            <S.Button onClick={handleModal}>Ok</S.Button>
                        </S.ProductDescrWrap>
                    </Modal>
                </FadingComponent>
            </div>
            <div className='product-proceed'>
                <button type='button'>
                    <h3>Оформить</h3>
                </button>
            </div>
        </S.ProductDataFooter>
    )
}

export default ProductFooter;