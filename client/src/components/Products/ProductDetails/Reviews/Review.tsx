import Stars from './Stars';

import { ReviewStarType } from '../../../../ts/types';

import * as S from './style';

const Review = ({ rev }: any) => {
    const { author, rate, review, createdAt } = rev;

    return (
        <S.Review>
            <S.ReviewHeader>
                <div className='reviewer-name'>
                    <h4>{author.name}</h4>
                    <span>{createdAt}</span>
                </div>
                <div className='reviewer-rate'>
                    <Stars
                        type={ReviewStarType.STATIC}
                        rate={rate}
                    />
                </div>
            </S.ReviewHeader>
            <S.ReviewBody>
                <span>{review}</span>
            </S.ReviewBody>
        </S.Review>
    )
}

export default Review;