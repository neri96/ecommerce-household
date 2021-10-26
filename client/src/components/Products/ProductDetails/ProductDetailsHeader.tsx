import { useState, useEffect } from 'react';

import ReviewList from './Reviews/ReviewList';
import Stars from './Reviews/Stars';

import { ReviewStarType } from '../../../ts/types';

import * as S from './style';

const ProductDetailsHeader = ({ name, reviews }: { name: string, reviews: any }) => {
    const [totalAvg, setTotalAvg] = useState(0);

    useEffect(() => {
        let totalRate: number = 0;
        
        reviews.forEach((review: any, i: number, self: any) => {
            const { rate } = review;
            totalRate += rate;
    
            if(i === (self.length - 1)) {       
                setTotalAvg(totalRate / reviews.length);
            };
        })
    }, [reviews]);

    return (
        <S.ProductDataHeader>
            <S.ProductName>
                <h2>{name}</h2>
            </S.ProductName>
            <S.Reviews>
                <Stars 
                    type={ReviewStarType.STATIC}
                    rate={totalAvg}
                />
                <ReviewList reviews={reviews} />
            </S.Reviews>
        </S.ProductDataHeader>
    )
}

export default ProductDetailsHeader;