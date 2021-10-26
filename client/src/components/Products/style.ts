import styled, { css } from 'styled-components';

import * as v from '../../constants/variables';

const ProductListWrap = styled.section`
    /* height: auto; */
    height: calc(100% - 100px);
    width: 100%;
    background-image: url('background.jpg');
    background-size: cover;
    position: relative;
    /* min-height: calc(100vh - 100px); */
    /* background-image: url('/background.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */

`;

const ProductList = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 0 10px;
    box-sizing: border-box;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ProductWrap = styled.div`
    height: 300px;
    padding: 10px;
    @media (max-width: 550px) {
        height: 350px;
    }
`;

const productStyles = (size: string, justifyContent: string) => {
    return (
        css`
            height: ${size};
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: ${justifyContent};
        `
    )
};

const Product = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(51, 51, 51, .4);
    box-shadow: 0px 0px 3px 0px rgba(64, 64, 64, 0.7);
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    .product-img {
        height: 55%;
        width: 100%;
        box-shadow: 0px 0px 2px 0px rgba(64, 64, 64, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            height: 90%;
            width: 90%;
        }
    }
    .product-name {
        ${productStyles('15%', 'center')}
        text-transform: capitalize;
    }
    .product-price {
        ${productStyles('10%', 'center')}
        font-size: 20px;
    }
    .product-buttons {
        ${productStyles('20%', 'space-evenly')}
        button {
            height: 60%;
            width: 40%;
            background-color: #333;
            border: none;
            outline: none;
            border-radius: 5px;
            padding: 0 10px;
            cursor: pointer;
        }
    }
`;

const ProductModify = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(51, 51, 51, .8);
    border-bottom-left-radius: 5px;
    svg {
        margin: 5px;
    }
`;

const ShowMore = styled.div`
    height: 50px;
    width: 200px;
    margin: 0 auto;
    padding: 10px 0 20px 0;
    button {
        height: 100%;
        width: 100%;
        border-radius: 5px;
        outline: none;
        border: none;
        background-color: ${v.regularDark};
        cursor: pointer;
    }
`;

export { 
    ProductListWrap,
    ProductList,
    ProductWrap,
    Product,
    ProductModify,
    ShowMore
};