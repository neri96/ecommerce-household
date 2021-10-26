import * as S from './style';

import { MenuProps } from './ts/interfaces';

const MenuHamb = ({ isMenuOpen, handleMenu }: MenuProps) => {
    return (
        <S.MenuHambWrap>
            <S.MenuHamb 
                isMenuOpen={isMenuOpen} 
                onClick={handleMenu}
            >
                <span className='top' />
                <span className='middle' />
                <span className='bottom' />
            </S.MenuHamb>
        </S.MenuHambWrap>
    )
}

export default MenuHamb;