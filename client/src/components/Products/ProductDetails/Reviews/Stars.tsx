import { useState } from 'react';

import { AiFillStar } from 'react-icons/ai';
import { v4 as uuid } from 'uuid';

import { ReviewStarType } from '../../../../ts/types';

type HandleRateFunc = (starNum: number) => void;

const starsTotal: number[] = Array.from(Array(5), (_, i) => i + 1);

const Stars = (props: { type: `${ReviewStarType}`, rate: number, handleRate?: HandleRateFunc }) => {
    const [starHover, setStarHover] = useState(0);

    const { type, rate } = props;

    const setColor = (currentStar: number) => {
        if((currentStar <= Math.round(rate)) || 
        (currentStar <= starHover && type === ReviewStarType.DYNAMIC)) {
            return '#cc0000';
        } else return '#ccc';
    }

    return (
        <>
            {starsTotal.map((star: any) => {
                return type === ReviewStarType.STATIC ?
                    <AiFillStar 
                        key={uuid()}
                        color={`${setColor(star)}`} 
                    /> :
                    <AiFillStar 
                        key={uuid()}
                        color={`${setColor(star)}`} 
                        onClick={() => props.handleRate ? props.handleRate(star) : null}
                        onMouseEnter={() => setStarHover(star)}
                        onMouseLeave={() => setStarHover(0)}
                    />
            })}
        </>
    )
}

export default Stars;