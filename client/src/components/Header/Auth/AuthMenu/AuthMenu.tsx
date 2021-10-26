import AuthIcon from "./AuthIcon";

import { HoverType } from '../ts/types';

import * as S from './style';

const AuthMenu = () => {
    const { LOGIN_HOVER, REG_HOVER } = HoverType;

    return (
        <S.AuthMenu>
            <AuthIcon 
                hoverType={LOGIN_HOVER}
                iconName={'AiOutlineLogin'}
                classNames={{ line: 'login-line', tip: 'tip-login' }}
                text={'Войти'} 
            />
            <AuthIcon 
                hoverType={REG_HOVER}
                iconName={'AiOutlineUserAdd'}
                classNames={{ line: 'reg-line', tip: 'tip-reg' }}
                text={'Зарегистрироваться'} 
            />
        </S.AuthMenu>
    )
}

export default AuthMenu;