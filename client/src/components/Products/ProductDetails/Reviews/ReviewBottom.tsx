import { useState } from 'react';

import Stars from './Stars';
import ReviewInput from './ReviewInput';

import { ReviewStarType } from '../../../../ts/types';

import * as S from './style';

const ReviewBottom = () => {
    const [currentRate, setCurrentRate] = useState<number>(0);

    const handleRate = (starNum: number) => {
        setCurrentRate(starNum);
    }

    return (
        <S.ReviewBottom>
            <div className='review-input-header'>
                <div className='review-title'>
                    <span>Что вы думаете о данном продукте?</span>
                </div>
                <div className='review-rate'>
                    <Stars 
                        type={ReviewStarType.DYNAMIC}
                        rate={currentRate}
                        handleRate={handleRate}
                    />
                </div>
            </div>
            <ReviewInput currentRate={currentRate} handleRate={handleRate} />
        </S.ReviewBottom>
    )
}

export default ReviewBottom;