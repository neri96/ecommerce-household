import { useState, useRef } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import _ from 'lodash';

import FadingComponent from '../../includes/FadingComponent';
import CartContent from './CartContent';

import useActions from '../../../hooks/useActions';
import useReducerState from '../../../hooks/useReducerState';
import useCompareObjects from '../../../hooks/useCompareObjects';
import useToggleElement from '../../../hooks/useToggleElement';

import { CartCtx } from '../../../context';

import { getCartData, clearCartData } from '../../../utils/cartData';

import * as S from './style';

import { CartData, CartItemDetails } from '../../../ts/intrefaces';

const initialState: CartData = { 
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    lastUpdated: '' 
}

const Cart = () => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [cartData, setCartData] = useState<CartData>(initialState);

    const { updateCart } = useActions();
    const { updated } = useReducerState('updateCartState');
    const { useDeepCompareEffect } = useCompareObjects();

    const setDefaultState = () => {
        setCartData({ ...initialState });
    }

    const handleCart = () => setIsCartOpen(!isCartOpen); 

    const handleCartData = () => {
        const cartDataStorage = getCartData();
        setCartData({ ...cartDataStorage });
    }

    const getCart = () => {
        const cartDataStorage = getCartData();

        if(cartDataStorage) {
            // const expDate = new Date(new Date().setDate(new Date().getDate() + 1));
            const expDate = new Date(new Date(cartDataStorage.lastUpdated).setMinutes(new Date(cartDataStorage.lastUpdated).getMinutes() + 1));
            
            if(new Date().getTime() > expDate.getTime()) {
                clearCartData();
                setDefaultState();
                updateCart();                
            }

            const isEq = cartDataStorage.items.every((item: any, i: number) => {
                return _.isEqual(item, cartData.items[i]);
            })

            if(!isEq) {
                setCartData({ ...cartDataStorage });
            }
        } else {
            setDefaultState();
        }

        if(updated) updateCart();
    }

    useDeepCompareEffect(getCart, [cartData, updated, isCartOpen]);

    return (
        <S.NavIcon>
            <S.CartIconWrap>
                {cartData.totalAmount ?
                    <S.CartItemsCount>
                        <span>{cartData.totalAmount}</span>
                    </S.CartItemsCount> : null                
                }
                <AiOutlineShoppingCart onClick={handleCart} />
            </S.CartIconWrap>
            <FadingComponent fadeIn={isCartOpen}>
                <CartCtx.Provider value={{ handleCartData }}>
                    <CartContent cartData={cartData} />
                </CartCtx.Provider>
            </FadingComponent>
        </S.NavIcon>
    )
}

export default Cart;