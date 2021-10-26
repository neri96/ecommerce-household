import { Link } from 'react-router-dom';

import * as S from './style';

import { MenuProps } from './ts/interfaces';

const MainNav = ({ isMenuOpen, handleMenu }: MenuProps) => {
    return (
        <S.MainNav isMenuOpen={isMenuOpen}>
            <S.MainNavUl onClick={handleMenu}>
                <S.MainNavLi>
                    <Link to='/products/hygiene'>
                        Гигиена
                    </Link>
                </S.MainNavLi>
                <S.MainNavLi>
                    <Link to='/products/kitchen'>
                        Кухня
                    </Link>
                </S.MainNavLi>
                <S.MainNavLi>
                    <Link to='/products/auto'>
                        Авто
                    </Link>
                </S.MainNavLi>
                <S.MainNavLi>
                    <Link to='/products/other'>
                        Прочее
                    </Link>
                </S.MainNavLi>
            </S.MainNavUl>
        </S.MainNav>
    )
}

export default MainNav;