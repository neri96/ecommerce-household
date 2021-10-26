import styled, { css, keyframes } from 'styled-components';

import * as v from '../../../../constants/variables';

const ProductData = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    box-shadow: 0px -4px 6px 0px rgba(51, 51, 51, 0.6);
    z-index: 1000;
    @media(max-width: 980px) {
        height: 140px;
        flex-direction: column;
    }
    @media(max-width: 460px) {
        height: 240px;
    }
`;

const detailDiv = css`
    height: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductDataBody = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    background-color: ${v.backgroundColor};
    .product-availablity,
    .product-price,
    .product-amount {
        ${detailDiv}
        position: relative;
    }
    .product-amount {
        margin: 0 5px;
        .quantity-number, svg {
            margin: 0 3px;
        }
    }
    .product-price {
        position: relative;
    }

    @media(max-width: 980px) {
        width: 100%;
    }
    @media(max-width: 460px) {
        flex-direction: column;
    }
`;



const ProductDataFooter = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    background-color: ${v.backgroundColor};
    .product-descr {
        ${detailDiv}
        h3 {
            text-decoration: underline;
            text-underline-offset: 3px;
            cursor: pointer;
            transition: 300ms;
        }
        h3:hover {
            color: #b3b3b3;
        }
    }
    .product-proceed {
        ${detailDiv}
        button {
            height: 60%;
            width: 170px;
            background-color: ${v.regularDark};
            border: none;
            outline: none;
            border-radius: 5px;
            padding: 0 10px;
            cursor: pointer;
            box-shadow: ${v.btnShadow};
        }
    }
    @media(max-width: 980px) {
        width: 100%;
    }
    @media(max-width: 460px) {
        flex-direction: column;
    }
`;

const ProductDescrWrap = styled.div`
    width: 100%;
`;

const ProductDescrBody = styled.div`
    margin-bottom: 55px;
    padding: 20px 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    span {
        text-align: center;
    }
`;

const Button = styled.button`
    height: 35px;
    width: 150px;
    background-color: ${v.regularDark};
    color: ${v.regularLight};
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: ${v.btnShadow};
    z-index: 1100;
`;

export {
    ProductData,
    ProductDataBody,
    ProductDataFooter,
    ProductDescrWrap,
    ProductDescrBody,
    Button
}