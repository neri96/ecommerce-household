import { ReactChild, ReactChildren } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';

interface ModalProps {
    children: ReactChild | ReactChildren;
    handleModal?: () => void;
    modalWidth?: number;
    overlay?: boolean;
}

const Modal = ({ handleModal, children, modalWidth, overlay }: ModalProps) => {
    const errorState = useSelector((state: any) => state.errorState);
    
    return (
        <S.PopUpWrap isError={!!errorState.length}>
            {overlay ? <S.Overlay onClick={handleModal} /> : null}
            <S.Modal modalWidth={modalWidth}>
                {children}
            </S.Modal>
        </S.PopUpWrap>
    )
}

export default Modal;