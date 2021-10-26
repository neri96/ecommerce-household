import { CartData, CartItemDetails } from '../ts/intrefaces';

let initialValue: CartData = {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    lastUpdated: ''
}

const addItem = (product: CartItemDetails, amount: number = 1) => {
    const cartData = getCartData();
    const cart = cartData ? { ...cartData } : { ...initialValue };

    const { _id, name, price, images } = product;
    console.log(price, 'product price cart');
    
    let inCart: boolean = false;

    cart.items.forEach((item: CartItemDetails) => {
        if(item._id === _id) {
            item.quantity += amount;

            inCart = true;
        }
    });
    
    if(!inCart) {
        cart.items.push({
            _id,
            name,
            price: price * amount,
            images,
            quantity: amount
        })
    }

    cart.totalAmount += amount;
    cart.totalPrice += price * amount;
    cart.lastUpdated = new Date();

    localStorage.setItem(
        'cartData',
        JSON.stringify(cart)
    )
}

const minusItem = (product: CartItemDetails) => {
    const cart = getCartData();

    const { _id, price } = product;

    cart.items.forEach((item: CartItemDetails) => {
        if(item._id === _id) {
            item.quantity -= 1;
        }
    })

    cart.totalAmount -= 1;
    cart.totalPrice -= price;
    cart.lastUpdated = new Date();

    localStorage.setItem(
        'cartData',
        JSON.stringify(cart)
    )
}

const removeItem = (product: CartItemDetails) => {
    const cart = getCartData();

    const { _id, price, quantity } = product;

    const cartFiltered = cart.items.find((item: CartItemDetails) => {
        return item._id !== _id;
    })

    cartFiltered.totalAmount -= quantity;
    cartFiltered.totalPrice -= price;
    cartFiltered.lastUpdated = new Date();

    localStorage.setItem(
        'cartData',
        JSON.stringify(cartFiltered)
    )
}

const getCartData = () => {
    const cartData = localStorage.getItem('cartData');

    return cartData ? JSON.parse(cartData) : null;
}

const clearCartData = () => {
    localStorage.removeItem('cartData');
}

export { getCartData, addItem, minusItem, removeItem, clearCartData };