import styled from 'styled-components';
import * as v from '../../../constants/variables';

import { NavIcon } from '../style';

const Cart = styled.div`
    height: 300px;
    width: 300px;
    position: absolute;
    top: 100%;
    right: 30px;
    border-radius: 5px;
    overflow: hidden;
    transition: 300ms ease;
    background-color: ${v.regularDark};
    box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 0.7);
    z-index: 1111111100;
`;

const CartIconWrap = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const CartItemsCount = styled.div`
    height: 25px;
    width: 25px;
    background-color: #b30000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 60%;
    left: 20px;
    border-radius: 50%;
`;

const CartHeader = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CartBody = styled.div`
    height: calc(100% - 120px);
    width: 100%;
    position: relative;
    overflow: auto;
    .cart-empty {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
    }
`;

const CartItem = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    background-color: ${v.backgroundColor};
    box-shadow: 0px 0px 2px 0px rgba(102, 102, 102, 0.9);
    .cart-item-img {
        height: 100%;
        width: 30%;
        background-color: #4d4d4d;
        img {
            height: 100%;
            width: 100%;
        }
    }
`;

const CartItemBody = styled.div`
    height: 100%;
    width: 70%;
    .cart-item-body-header {
        height: 40%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            text-transform: capitalize;
        }
    }
`;

const CartItemBodyRight = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    div {
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            height: 25px !important;
        }
        span, svg {
            margin-bottom: 1px;
        }
    }
`;

const CartFooter = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {
    NavIcon, 
    Cart,
    CartIconWrap,
    CartItemsCount,
    CartHeader,
    CartBody,
    CartItem,
    CartItemBody,
    CartItemBodyRight,
    CartFooter
}