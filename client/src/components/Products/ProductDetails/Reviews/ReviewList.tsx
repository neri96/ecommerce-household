import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { v4 as uuid } from 'uuid';

import Modal from '../../../includes/Modal';
import Review from './Review';
import ReviewBottom from './ReviewBottom';

import * as S from './style';

const ReviewList = ({ reviews }: any) => {
    const [localModal, setLocalModal] = useState<boolean>(false);
    
    const handleModal = () => {
        setLocalModal(!localModal);
    }

    const hadleEndings = () => {
        const nums = reviews.length.toString().split('');
        const numsLast = Number(nums[nums.length - 1]);

        if(numsLast === 1) {
            return 'отзыв';
        } else if(numsLast === 2 || numsLast === 3 || numsLast === 4) {
            return 'отзыва';
        } else {
            return 'отзывов'
        }
    }

    return (
        <>
            <S.ReviewsTitle>
                <h3 onClick={handleModal}>
                    {reviews.length} {hadleEndings()}
                </h3>
            </S.ReviewsTitle>
            <CSSTransition
                in={localModal}
                classNames='fade-modal'
                timeout={300}
                unmountOnExit
            >
                <Modal 
                    handleModal={handleModal}
                    modalWidth={800}
                    overlay
                >
                    <S.ReviewListWrap>
                        <S.ReviewList>
                            {reviews.map((rev: any) => {
                                return (
                                    <Review 
                                        key={uuid()} 
                                        rev={rev} 
                                    />
                                )
                            })}
                        </S.ReviewList> 
                        <ReviewBottom />
                    </S.ReviewListWrap>
                </Modal>
            </CSSTransition>
        </>
    )
}

export default ReviewList;