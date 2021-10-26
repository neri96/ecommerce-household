import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';

import { CSSTransition } from 'react-transition-group';

import Warning from './includes/Warning';

import { CHANGE_QUANTITY } from '../ts/types';

interface ProductBodyAmountProps {
    quantityToBuy: number,
    setQuantityToBuy: Dispatch<SetStateAction<number>>,
    quantity: number
}

const ProductBodyAmount = ({ quantityToBuy, setQuantityToBuy, quantity }: ProductBodyAmountProps) => {
    const [maxError, setMaxError] = useState<string | null>(null);

    const warningDuration = 3000;

    useEffect(() => {
        const closeWarning = setTimeout(() => {
            setMaxError(null);
        }, warningDuration);

        return () => {
            clearTimeout(closeWarning);
        }
    }, [maxError]);

    const handleQuantity = (operation: `${CHANGE_QUANTITY}`) => {
        if(maxError) {
            return false;
        }
        
        if(operation === CHANGE_QUANTITY.ADD) {
            quantityToBuy === quantity ?
            setMaxError(`Количество данного товара на складе не превышает ${quantityToBuy} единиц`) :
            setQuantityToBuy(quantityToBuy + 1);
        } else if(operation === CHANGE_QUANTITY.EXTRACT) {
            quantityToBuy === 1 ?
            setMaxError(`Данное количество единиц товара является минимальным для приобретения`) :
            setQuantityToBuy(quantityToBuy - 1);
        }
    }

    return (
        <div className='product-amount'>
            <GoArrowUp onClick={() => handleQuantity(CHANGE_QUANTITY.ADD)} />

            <CSSTransition
                in={!!maxError}
                classNames='fade-warning'
                timeout={300}
                unmountOnExit
            >
                <Warning warningDuration={warningDuration}>
                    <span>{maxError}</span>
                </Warning>
            </CSSTransition>
            
            <h3 className='quantity-number'>{quantityToBuy}</h3>
            <GoArrowDown onClick={() => handleQuantity(CHANGE_QUANTITY.EXTRACT)} />
        </div>
    )
}

export default ProductBodyAmount;