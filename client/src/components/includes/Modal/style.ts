import styled from 'styled-components';

import * as v from '../../../constants/variables';

const PopUpWrap = styled.div<any>`
    height: 100vh;
    width: 100vw;
    position: fixed;
    transition: 300ms ease-in-out;
    opacity: ${props => props.isError ? 0.6 : 1};
    z-index: ${props => props.isError ? -1 : 1005};
    &.fade-modal-enter {
        opacity: 0;
    }
    &.fade-modal-enter-active {
        opacity: 1;
    }
    &.fade-modal-exit {
        opacity: 1;
    }
    &.fade-modal-exit-active {
        opacity: 0;
    }
`;

const Overlay = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, .5); 
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

const Modal = styled.div<any>`
    width: ${props => !props.modalWidth ? '400px' : props.modalWidth + 'px'};
    background-color: white;
    position: fixed;
    background-color: #333;
    box-shadow: ${v.modalShadow};
    border-radius: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1101;
    transition: 300ms ease-in-out;
    @media(max-width: 850px) {
        width: 350px;
    }
    @media(max-width: 400px) {
        width: 330px;
    }
`;

const ModalLoading = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, .7); 
`;

const ModalHeader = styled.div`
    height: 35px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
    h3 {
        margin: 0;
    }
`;

const Input = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .error {
        position: absolute;
        top: 0;
        left: 22px;
        font-size: 14px;
        color: red;
    }
    .label {
        font-size: 14px;
        margin: 10px 0 -17px 22px;
        padding: 0;
    }
    input {
        height: 35px;
        width: 90%;
        color: ${v.regularLight};
        background-color: ${v.regularDark};
        font-size: 15px;
        box-sizing: border-box;
        padding-left: 5px;
        outline: none;
        border: none;
        border-radius: 5px;
        margin: 0 auto;
        margin-top: 20px;
        box-shadow: ${v.inpShadow};
        &::placeholder {
            color: ${v.regularLight};
            opacity: .5;
        }
    }
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

const Button = styled.div`
    height: 35px;
    width: 90%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    button {
        height: 100%;
        width: 200px;
        font-size: 14px;
        background-color: ${v.regularDark};
        color: ${v.regularLight};
        box-shadow: ${v.btnShadow};
        border-radius: 5px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 300ms ease-in-out;
    }
`;

export { 
    PopUpWrap, 
    Overlay, 
    Modal,
    ModalLoading,
    ModalHeader,
    Input,
    Button 
}