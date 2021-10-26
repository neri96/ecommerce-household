import styled from 'styled-components';

import { Reviews } from './Reviews/style';

import * as v from '../../../constants/variables';

interface ImagesLength {
    length: number;
}

interface SliderDetails {
    direction: 'left' | 'right';
}

const ProductDetailsWrap = styled.section`
    height: calc(100vh - 170px);
    width: 100%;
    @media(max-width: 460px) {
        height: auto;
    }
`;

const ProductDetails = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

const ProductSlider = styled.div`
    width: 100%;
    flex-grow: 1;
    background-color: ${v.regularDark};
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
    @media(max-width: 980px) {
        height: 65%;
    }
    @media(max-width: 460px) {
        min-height: 300px;
    }
`;

const SliderWrap = styled.div<any>`
    height: 100%;
    width: ${props => props.length * 100}%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    transform: ${props => `translateX(-${(100 / props.length) * props.index}%)`};
    transition: 300ms ease transform;
    img {
        height: 100%;
        width: ${props => 100 / props.length}%;
    }
`

const SliderArrow = styled.div<SliderDetails>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${props => props.direction === 'left' && '20px'};
    right: ${props => props.direction === 'right' && '20px'};
`;

const SliderControllers = styled.div`
    height: 50px;
    width: auto;
    padding: 0 10px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
`;

const PaginationPaint = styled.div<any>`
    height: 12px;
    width: 12px;
    margin: 0 5px;
    background-color: ${props => props.isCurrent ? v.backgroundColor : v.regularLight};
    border-radius: 50%;
    cursor: pointer;
`;

const ProductDataHeader = styled.div`
    height: 70px;
    width: 100%;
    background-color: ${v.backgroundColor};
    
    position: relative;
    box-shadow: 0px 4px 6px 0px rgba(51, 51, 51, 0.6);
    z-index: 1111;
    h2 {
        margin: 0;
        text-transform: capitalize;
    }
    @media(max-width: 460px) {
        height: 140px;
    }
`;

const ProductName = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 1160px) {
        justify-content: flex-start;
        h2 {
            margin-left: 20px;
        }
    }
    @media(max-width: 460px) {
        height: 50%;
        justify-content: center;
    }
`;

export { 
    ProductDetailsWrap,
    ProductDetails,
    ProductSlider,
    SliderWrap,
    SliderControllers,
    PaginationPaint,
    SliderArrow,
    ProductDataHeader,
    ProductName,
    Reviews
};