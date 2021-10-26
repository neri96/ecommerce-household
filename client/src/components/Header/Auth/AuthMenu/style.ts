import styled from 'styled-components';

interface AuthState {
    loginHover: boolean;
    registerHover: boolean;
}

interface AuthTipProps {
    type: string;
    state: AuthState;
}

const AuthMenu = styled.div`
    height: 40px;
    width: 100px;
    position: absolute;
    top: 100px;
    display: flex;
    transition: 300ms ease-in-out;
    z-index: 10000;
`;

const AuthMenuIcon = styled.div<any>`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .reg-line, .login-line {
        position: absolute;
        height: 50%;
        width: 2px;
        overflow: hidden;
        background-color: rgba(204, 204, 204, .4);
        top: -25px;
        transform: translateX(-50%);
    }
    .reg-line {
        transform: rotate(-25deg);
        left: 40%;
    }
    .login-line {
        right: 40%;
        transform: rotate(25deg);
    }
`;

const setOpacity = (props: AuthTipProps) => {
    const { type, state: { loginHover, registerHover } } = props;

    return (type === 'tip-login' && loginHover) ?
    '1' : (type === 'tip-reg' && registerHover) ?
    '1' : '0'
}

const AuthTip = styled.div<AuthTipProps>`
    height: 40px;
    width: auto;
    padding: 0 10px;
    position: absolute;
    top: 120%;
    opacity: ${props => setOpacity(props)};
    background-color: rgba(204, 204, 204);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: ${props => props.type === 'tip-login' && '50%'};
    left: ${props => props.type === 'tip-reg' && '50%'};
    transition: 300ms ease-in-out;
    box-shadow: 0px 0px 3px 0px rgba(204, 204, 204, .4);
    span {
        color: #333;
    }
`;

export {
    AuthMenu,
    AuthMenuIcon,
    AuthTip
}