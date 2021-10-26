import { useState, useEffect } from 'react';

import { AiOutlineUser } from 'react-icons/ai';

import AuthMenu from './AuthMenu';
import FadingComponent from '../../../includes/FadingComponent';

import { MenuContext } from '../../../../context';

interface AuthMain {
    isMenuOpen: boolean;
    handleElement: () => void;
}

const AuthMainIcon = ({ isMenuOpen, handleElement }: AuthMain) => {
    return (
        <>
            <AiOutlineUser onClick={handleElement} />
            <FadingComponent fadeIn={isMenuOpen}>
                <MenuContext.Provider value={{ handleMenu: handleElement }}>
                    <AuthMenu />
                </MenuContext.Provider>
            </FadingComponent>
        </>
    )
}

export default AuthMainIcon;