import { useEffect } from 'react';

import { MdCheck } from 'react-icons/md';

import * as S from './style';

interface Success {
    message: string;
    showMsg: boolean;
    handleMsgVis: () => void;
}

const SuccessMsg = ({ message, showMsg, handleMsgVis }: Success) => {
    useEffect(() => {
        console.log('Works?');
        
        const closeMsg = setTimeout(() => {
            handleMsgVis();
        }, 2000);

        return () => clearTimeout(closeMsg);
    }, [])

    return (
        <S.Message>
            <MdCheck color='#009900' />
            <span>{message}</span>
        </S.Message>
    )
}

export default SuccessMsg;