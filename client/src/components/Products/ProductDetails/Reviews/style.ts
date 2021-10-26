import styled from 'styled-components';

import * as v from '../../../../constants/variables';

const Reviews = styled.div`
    height: 100%;
    /* width: 200px; */
    background: ${v.backgroundColor};
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1101;
    svg {
        cursor: auto;
    }
    @media(max-width: 460px) {
        position: static;
        height: 50%;
    }
`;

const ReviewListWrap = styled.div`
    max-height: 600px;
    width: 100%;
`;

const ReviewList = styled.div`
    max-height: 450px;
    width: 100%;
    overflow-y: auto;
`;

const Review = styled.div`
    width: 100%;
    margin-bottom: 10px;
    background-color: #404040;
    svg {
        height: 25px !important;
    }
`;

const ReviewHeader = styled.div`
    height: 40px;
    width: 100%;
    padding: 10px;
    background-color: #4d4d4d;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    .reviewer-name,.reviewer-rate {
        height: 100%;
        display: flex;
        align-items: center;
        span {
            margin: 0 30px;
            font-size: 12px;
        }
    }
    @media(max-width: 400px) {
        height: 80px;
        flex-direction: column;
        padding: 0;
        span {
            margin: 0;
        }
        .reviewer-rate, .reviewer-name {
            justify-content: center;
        }
    }
`;

const ReviewBody = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`;

const ReviewBottom = styled.div`
    height: 150px;
    width: 100%;
    z-index: 1101;
    .review-input-header {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .review-title, .review-rate {
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 10px;
        }
        @media(max-width: 850px) {
            height: 100px;
            flex-direction: column;
            .review-rate {
                justify-content: center;
            }
            span {
                width: 100%;
                text-align: center;
            }
        }
    }
`;

const ReviewsTitle = styled.div`
    height: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    h3 {
        text-decoration: underline;
        text-underline-offset: 3px;
        cursor: pointer;
    }
`;

const ReviewInput = styled.div`
    height: calc(100% - 50px);
    width: 100%;
    position: relative;
    textarea {
        height: 100%;
        width: 100%;
        padding: 10px;
        font-size: 14px;
        font-family: 'Montserrat Alternates', sans-serif;
        color: #333;
        background-color: #ccc;
        overflow-y: auto;
        outline: none;
        box-sizing: border-box;
    }
    button {
        height: 40px;
        width: 120px;
        padding: 0 10px;
        background-color: #333;
        position: absolute;
        bottom: 0;
        right: 0;
        outline: none;
        border: none;
        border-radius: 5px;
        border-bottom-right-radius: 0;
        cursor: pointer;
        transition: 300ms ease-in-out;
    }
`;

export {
    Reviews,
    ReviewsTitle,
    ReviewListWrap,
    ReviewList,
    Review,
    ReviewHeader,
    ReviewBody,
    ReviewBottom,
    ReviewInput
}