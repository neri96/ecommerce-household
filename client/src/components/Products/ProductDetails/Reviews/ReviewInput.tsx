import { useState, useContext } from "react";

import useFetch from "../../../../hooks/useFetch";

import { ProductDetailsCtx } from '../../../../context';
import { getUserData } from "../../../../utils/storeData";

import { Methods, FetchType } from '../../../../ts/types';

import * as S from './style';

interface ReviewInputProps {
    currentRate: number, 
    handleRate: (starNum: number) => void
}

const ReviewInput = ({ currentRate, handleRate }: ReviewInputProps) => {
    const [reviewText, setReviewText] = useState<string>('');

    const { response, sendRequest } = useFetch(FetchType.FETCH_MSG);
    const { loading } = response;

    const { productDetails: { _id }, handleProductOneUpdates } = useContext(ProductDetailsCtx);
    
    let userId = getUserData().id; 
    
    const sendReview = async () => {
        sendRequest({
            path: `/products/addReview/${_id}`,
            method: Methods.POST,
            value: {
                userId,
                rate: currentRate,
                review: reviewText
            },
            authReq: true
        });
        
        handleProductOneUpdates();
        setReviewText('');
        handleRate(0);
    }
    console.log(loading);
    
    return (
        <S.ReviewInput>
            <textarea 
                placeholder={'Оставьте свой отзыв здесь'} 
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
            />
            <button 
                type='button'
                disabled={loading}
                onClick={sendReview}
            >
                {loading ?
                    <img src='./loading-button.svg' /> :
                    'Отправить'
                }
            </button>
        </S.ReviewInput>
    )
}

export default ReviewInput