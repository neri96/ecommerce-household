import styled from 'styled-components';

interface IsMenuOpen {
    isMenuOpen: boolean;
}

const Header = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
`;

const MainIcon = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 80px;
        cursor: pointer;
    }
`;

const MainNav = styled.nav<IsMenuOpen>`
    flex-grow: 4;
    height: 100%;
    @media(max-width: 750px) {
        height: calc(100vh - 100px);
        width: 100%;
        display: flex;
        position: absolute;
        top: 100%;
        left: ${props => props.isMenuOpen ? '0' : '-100%'};
        background: rgba(51, 51, 51, .8);
        transition: 300ms ease;
        z-index: 2000;
        ul {
            height: 50%;
            align-items: flex-start;
            flex-direction: column;
            li {
                width: 100%;
                background-color: #333;
                box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, .9);
                transition: 300ms ease;
                cursor: pointer;
            }
            li:hover {
                background: #262626;
            }
        }
    }
`;

const MainNavUl = styled.ul`
    height: 100%;
    width: 100%;
    display: flex;
`;

const MenuHambWrap = styled.div`
    flex-grow: 1;
    display: none;
    align-items: center;
    justify-content: center;
    position: relative;
    @media(max-width: 750px) {
        display: flex;
    }
`;

const MenuHamb = styled.div<IsMenuOpen>`
    height: 27px;
    width: 30px;
    position: relative;
    border-radius: 3px;
    outline: 2px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.isMenuOpen ? 'center' : 'space-evenly'};
    cursor: pointer;
    span {
        height: 2px;
        width: 70%;
        border-radius: 3px;
        background-color: #ccc;
        transition: 300ms ease;
        position: ${props => props.isMenuOpen && 'absolute'};
    }
    .top {
        transform: ${props => props.isMenuOpen && 'rotate(45deg)'};
    } 
    .middle {
        transform: ${props => props.isMenuOpen && 'rotate(230deg)'};
    }
    .bottom {
        transform: ${props => props.isMenuOpen && 'rotate(-45deg)'};
    }
`;

const MainNavLi = styled.li`
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        color: #ccc;
        transition: 300ms color;
    }
    a:hover {
        color: #b3b3b3;
    }
`;

const MainNavRight = styled.div`
    flex-grow: 2;
    height: 100%;
    display: flex;
`;

const NavIcon = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export { 
    Header,
    MainIcon, 
    MainNav, 
    MainNavUl, 
    MainNavLi, 
    MainNavRight, 
    MenuHambWrap,
    MenuHamb,
    NavIcon    
};