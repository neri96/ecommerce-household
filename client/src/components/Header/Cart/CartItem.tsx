import { useContext } from 'react';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';

import { CartCtx } from '../../../context';

import { CartItemDetails } from '../../../ts/intrefaces'; 

import { addItem, minusItem, removeItem } from '../../../utils/cartData';

import * as S from './style';

const CartItem = ({ data }: { data: CartItemDetails }) => {
    const { name, quantity, price, images } = data;

    const { handleCartData } = useContext(CartCtx);
    
    const increase = (data: CartItemDetails) => {
        addItem(data);

        handleCartData();
    }

    const decrease = (data: CartItemDetails) => {
        minusItem(data);

        handleCartData();
    }

    const remove = (data: CartItemDetails) => {
        removeItem(data);

        handleCartData();
    } 

    return (
        <S.CartItem>
            <div className='cart-item-img'>
                <img src={`/${images[0]}`} />
            </div>
            <S.CartItemBody>
                <div className='cart-item-body-header'>
                    <span>{name}</span>
                </div>
                <S.CartItemBodyRight>
                    <div>
                        <GoArrowUp onClick={() => increase(data)} />
                        <span>{quantity}</span>
                        <GoArrowDown onClick={() => decrease(data)} />
                    </div>
                    <div>
                        <span>{price * quantity} ₽</span>
                    </div>
                </S.CartItemBodyRight>
            </S.CartItemBody>
        </S.CartItem>
    )
}

export default CartItem;