import { useContext } from 'react';
import { useSelector } from 'react-redux';

import useToggleElement from '../../../hooks/useToggleElement';

import FadingComponent from '../../includes/FadingComponent';

import AuthMainIcon from './AuthMenu/AuthMainIcon';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

import { AuthStatus } from '../../../context';

import * as S from './style';

const Auth = () => {
    const { login, register } = useSelector((state: any) => state.modalState);
    const { isOpen: isMenuOpen, handleElement, ref } = useToggleElement();

    const { isAuth, handleAuth } = useContext(AuthStatus);

    return (
        <S.NavIcon ref={ref}>
            {isAuth ?
                <Logout handleAuth={handleAuth} /> :
                <>
                    <AuthMainIcon 
                        isMenuOpen={isMenuOpen} 
                        handleElement={handleElement} 
                    />
                    <FadingComponent fadeIn={login}>
                        <Login handleAuth={handleAuth} />
                    </FadingComponent>
                    <FadingComponent fadeIn={register}>
                        <Register handleAuth={handleAuth} />
                    </FadingComponent>
                </> 
            }
        </S.NavIcon>
    )
}

export default Auth;