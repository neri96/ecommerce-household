import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { clearError } from '../../redux/actions';

import * as S from './style';

const ErrorModal = () => {
    const dispatch = useDispatch();
    const errorState = useSelector((state: any) => state.errorState);
    const isError = !!errorState.length;
    
    const duration = 2000;

    const handleClearError = () => dispatch(clearError());

    useEffect(() => {
        if(isError) {
            setTimeout(() => {
                handleClearError();
            }, duration);
        }
    }, [isError]);
    
    return (
        <S.ErrorModal>
            <S.ErrorMsgWrap>
                {errorState.map((err: string) => {
                    return (
                        <S.ErrorMsg key={uuidv4()}>{err}</S.ErrorMsg>
                    )
                })}
                <S.Button onClick={handleClearError}>Ok</S.Button>
                <S.BottomLine duration={duration} />
            </S.ErrorMsgWrap>
        </S.ErrorModal>
    )
}

export default ErrorModal;