import { useContext } from 'react';

import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';

import useToggleModal from '../../../../hooks/useToggleModal';
import useHoverIcon from './useHoverIcon';

import { MenuContext } from '../../../../context';

import { ModalTypes } from '../../../../ts/types';
import { HoverType } from '../ts/types';

import * as S from './style';

interface ActionIconProps {
    hoverType: HoverType.LOGIN_HOVER | HoverType.REG_HOVER,
    iconName: string,
    classNames: {
        line: string,
        tip: string
    },
    text: 'Войти' | 'Зарегистрироваться'
}

const AuthIcon = ({ 
    hoverType,
    iconName,
    classNames: { line, tip },
    text 
}: ActionIconProps) => {
    const { state, handleHover } = useHoverIcon();

    const { toggleModal } = useToggleModal();

    const { handleMenu } = useContext(MenuContext);

    // const AiIcon: any = Icon[iconName];

    const setModal = (type: ModalTypes) => {
        toggleModal(type);
        handleMenu();
    }

    const handleModalState = () => {
        const { LOGIN_HOVER, REG_HOVER } = HoverType;
        const { LOGIN, REGISTER } = ModalTypes;

        if(hoverType === LOGIN_HOVER) {
            setModal(LOGIN);
        } else if(hoverType === REG_HOVER) {
            setModal(REGISTER);
        }
    }

    return (
        <S.AuthMenuIcon>
            <div className={line} />
            {iconName === 'AiOutlineLogin' ?
                <AiOutlineLogin
                    onClick={handleModalState} 
                    onMouseEnter={() => handleHover({ type: hoverType, payload: true })}
                    onMouseLeave={() => handleHover({ type: hoverType, payload: false })}
                /> :
                <AiOutlineUserAdd
                    onClick={handleModalState} 
                    onMouseEnter={() => handleHover({ type: hoverType, payload: true })}
                    onMouseLeave={() => handleHover({ type: hoverType, payload: false })}
                />
            }
            
            <S.AuthTip 
                type={tip}
                state={state}
            >
                <span>{text}</span>
            </S.AuthTip>
        </S.AuthMenuIcon>
    )
}

export default AuthIcon; 