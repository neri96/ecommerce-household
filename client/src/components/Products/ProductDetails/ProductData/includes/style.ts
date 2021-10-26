import styled, { keyframes } from 'styled-components';

const WarningWrap = styled.div`
    height: 100px;
    width: 300px;
    position: absolute;
    bottom: 90%;
    left: 40px;
    transition: 300ms ease-in-out;
    &.fade-warning-enter {
        opacity: 0;
    }
    &.fade-warning-enter-active {
        opacity: 1;
    }
    &.fade-warning-exit {
        opacity: 1;
    }
    &.fade-warning-exit-active {
        opacity: 0;
    }
`;

const Warning = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    background: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    span {
        text-align: center;
    }
`;

const warningLineAppear = keyframes`
    0% { width: 0 }
    100% { width: 100% }
`;

const WarningBottomLine = styled.div<any>`
    height: 3px;
    animation-name: ${warningLineAppear};
    animation-duration: ${props => `${props.duration}ms`}; 
    animation-timing-function: linear;
    border-radius: 5px;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export { WarningWrap, Warning, WarningBottomLine }