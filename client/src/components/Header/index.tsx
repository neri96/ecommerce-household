import { useState } from 'react';

import { useHistory } from 'react-router';

import MainNav from './MainNav';
import MenuHamb from './MenuHamb';
import MainNavRight from './MainNavRight';

import * as S from './style';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const history = useHistory();

    const handleHome = () => history.push('/');
    const handleMenu = () => {
        if(window.innerWidth <= 750) {
            setMenuOpen(!isMenuOpen);
        }
    };

    return (
        <S.Header>
            <S.MainIcon>
                <img src='/logo.png' alt='logo' onClick={handleHome} />
            </S.MainIcon>
            <MenuHamb isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
            <MainNav isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
            <MainNavRight />
        </S.Header>
    )
}

export default Header;