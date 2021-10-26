import { useState, useContext } from 'react';

import ProductBodyAmount from './ProductBodyAmount';
import ProductBodyPrice from './ProductBodyPrice';

import { ProductDetailsCtx } from '../../../../context';

import { TiWarningOutline } from 'react-icons/ti';
import { GoCheck } from 'react-icons/go';

import { getCartData } from '../../../../utils/cartData';

import * as S from './style';

const ProductBody = () => {
    const [quantityToBuy, setQuantityToBuy] = useState<number>(getCartData() ? getCartData().totalAmount : 1);
    
    const { productDetails: { price, deliveryPrice, quantity }} = useContext(ProductDetailsCtx);
    
    const showQuantityAvalaible = () => {
        switch(true) {
            case !quantity:
                return <h3>Нет в наличии</h3>;
            case quantity === 1:
                return (
                    <>
                        <TiWarningOutline color={'green'} />
                        <h3>Остался последний экземпляр!</h3>
                    </>
                )
            case quantity > 1:
                return (
                    <>
                        <GoCheck color={'green'} />
                        <h3>В наличии</h3>
                    </>
                )
            default:
                return <h3>Нет в наличии</h3>;
        }
    }

    return (
        <S.ProductDataBody>
            <div className='product-availablity'>
                {showQuantityAvalaible()}
            </div>
            <ProductBodyAmount 
                quantityToBuy={quantityToBuy} 
                setQuantityToBuy={setQuantityToBuy}
                quantity={quantity}
            />
            <ProductBodyPrice 
                price={price} 
                quantityToBuy={quantityToBuy} 
                deliveryPrice={deliveryPrice}
            />
        </S.ProductDataBody>
    )
}

export default ProductBody;