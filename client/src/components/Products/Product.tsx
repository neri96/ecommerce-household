import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import ProductModify from './ProductModify';

import useActions from '../../hooks/useActions';
import useReducerState from '../../hooks/useReducerState';

import { addItem, getCartData } from '../../utils/cartData';

import * as S from './style';

const Product = ({ item }: any) => {
    const { _id, name, category, images, price } = item;
    
    const [inCart, setInCart] = useState<boolean>(false);

    const history = useHistory();
    
    const { updateCart } = useActions();
    const updatedState = useReducerState('updateCartState');
    
    useEffect(() => {
        const cartData = getCartData();

        const isInCart = cartData ? cartData.items.find((item: any) => {
            return item._id === _id;
        }) : null;

        setInCart(isInCart);
    }, [updatedState])

    const handleLink = () => {
        history.push(`/products/${category + '/' + name}`);
    }
    
    const addToCart = () => {
        addItem(item);

        updateCart();
    }
    
    return (
        <S.ProductWrap>
            <S.Product>
                <ProductModify item={item} />
                <div className='product-img'>
                    <img src={`/${images[0]}`} />
                </div>
                <div className='product-name'>
                    <span>{name}</span>
                </div>
                <div className='product-price'>
                    <span>{price}₽</span>
                </div>
                <div className='product-buttons'>
                    {inCart ? 
                        <button type='button' onClick={handleLink}>Оформить</button> :
                        <button type='button' onClick={addToCart}>В корзину</button>
                    }
                    <button type='button' onClick={handleLink}>Перейти</button>
                </div>
            </S.Product>
        </S.ProductWrap>
    )
}

export default Product;