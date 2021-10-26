import { useState, useEffect } from 'react';

import { CSSTransition } from 'react-transition-group';

import Warning from './includes/Warning';

interface ProductBodyPriceProps { 
    price: number, 
    quantityToBuy: number, 
    deliveryPrice: number 
}

const ProductBodyPrice = ({ price, quantityToBuy, deliveryPrice }: ProductBodyPriceProps) => {
    const [priceWarning, setPriceWarning] = useState<string | null>(null);

    const warningDuration = 5000;

    const handleWarning = () => {
        const closeWarning = setTimeout(() => {
            localStorage.setItem('warnedAboutPrice', JSON.stringify(true));
            setPriceWarning(null);

            clearTimeout(closeWarning);
        }, warningDuration);
    }

    useEffect(() => {
        const isWarned = localStorage.getItem('warnedAboutPrice');

        if(!isWarned && deliveryPrice) {
            let warningTimeout: any;

            const showWarning = () => {
                return new Promise((res: any) => {
                    warningTimeout = setTimeout(() => {
                        setPriceWarning(`Общая стоимость включает в себя стоимость доставки в размере ${deliveryPrice} ₽`);
                        res();
                    }, 5000);
                })
            }

            showWarning()
                .then(() => handleWarning());

            return () => {
                clearTimeout(warningTimeout);
            }
        }
    }, [deliveryPrice]);

    return (
        <>
            <div className='product-price'>
                <CSSTransition
                    in={!!priceWarning}
                    classNames='fade-warning'
                    timeout={300}
                    unmountOnExit
                >
                    <Warning warningDuration={warningDuration}>
                        <span>{priceWarning}</span>
                    </Warning>
                </CSSTransition>
                <h3>Итого - {(price * quantityToBuy) + deliveryPrice} ₽</h3>
            </div>
        </>
    )
}

export default ProductBodyPrice;