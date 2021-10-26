import CartItem from './CartItem';

import * as S from './style';

import { CartData, CartItemDetails } from '../../../ts/intrefaces';

const CartContent = ({ cartData }: { cartData: CartData }) => {
    return (
        <S.Cart>
            <S.CartHeader>
                <h4>Корзина</h4>
            </S.CartHeader>
            <S.CartBody>
                {!cartData.totalAmount ? 
                    <span className='cart-empty'>Ваша корзина пуста</span> :
                    cartData.items.map((item: CartItemDetails) => {
                        return <CartItem key={item._id} data={item} />
                    })
                }
            </S.CartBody>
            <S.CartFooter>
                <h4>Всего: {cartData.totalPrice} ₽</h4>
            </S.CartFooter>
        </S.Cart>
    )
}

export default CartContent;