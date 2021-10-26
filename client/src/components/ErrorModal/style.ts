import styled, { keyframes } from "styled-components";

import * as v from '../../constants/variables';

const ErrorModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 200px;
    width: 500px;
    background-color: #333;
    border-radius: 5px;
    transition: 300ms ease-in-out;
    z-index: 3000;
    box-shadow: ${v.modalShadow};
    &.fade-error-enter {
        opacity: 0;
    }
    &.fade-error-enter-active {
        opacity: 1;
    }
    &.fade-error-exit {
        opacity: 1;
    }
    &.fade-error-exit-active {
        opacity: 0;
    }
`;

const ErrorMsgWrap = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const ErrorMsg = styled.h3`
    margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Button = styled.button`
    height: 35px;
    width: 150px;
    background-color: #ccc;
    color: #333;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 300ms ease-in-out;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

const lineAppear = keyframes`
    0% { width: 0 }
    100% { width: 100% }
`;

const BottomLine = styled.div<any>`
    height: 3px;
    animation-name: ${lineAppear};
    animation-duration: ${props => `${props.duration}ms`}; 
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    border-radius: 5px;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export { 
    ErrorModal, 
    ErrorMsgWrap, 
    ErrorMsg, 
    Button, 
    BottomLine 
};