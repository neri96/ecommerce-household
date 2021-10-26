import { Request, Response } from 'express';

import Product from '../models/Product';

interface Product {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
}

interface Cart {
    items: Product[],
    totalAmount: number,
    totalPrice: number
}

const getAll = (req: Request, res: Response) => {    
    console.log(req.session.cart, 'outside');
    if(req.session.cart) {
        console.log(req.session.cart, 'cart');
        return res.status(200).json({ cart: req.session.cart });
    } else {
        console.log(req.session.cart, 'NULLNULLNULL');
        return res.status(200).json({ cart: null });
    }
}


const add = async (req: Request, res: Response) => {
    const id = req.params.id;
    const amount = Number(req.query.amount);
    console.log(req.session.cart);

    let initialValues: Cart = {
        items: [],
        totalAmount: 0,
        totalPrice: 0
    }

    try {
        const cart: Cart = req.session.cart ? req.session.cart : initialValues;

        const { name, price, image } = await Product.findOne({ _id: id });

        let inCart: boolean = false;

        cart.items.forEach((item: Product) => {
            if(item.id === id) {
                item.quantity += amount;
                item.price += price * amount;
                inCart = true;
            }
        });

        if(!inCart) {
            cart.items.push({
                id,
                name,
                price: price * amount,
                image,
                quantity: amount
            })
        }

        cart.totalAmount += amount;
        cart.totalPrice += price * amount;

        req.session.cart = cart;
        
        return res.status(200).json({ cart });
    } catch (err) {
        return res.status(500).json({ error: 'Что-то пошло не так' });
    }
}

const removeOne = (req: Request, res: Response) => {
    const id = req.params.id;

    const cart: Cart = req.session.cart;

    let price: number;

    try {
        cart.items.forEach((item: Product, i: number, self: Product[]) => {
            if(item.id === id) {
                price = item.price / item.quantity
                if(item.quantity > 1) {
                    item.quantity -= 1;
                    item.price -= price;
                } else {
                    self.splice(i, 1);
                }           
            }
        });
    
        cart.totalAmount -= 1;
        cart.totalPrice -= price;
    
        req.session.cart = cart.items.length ? cart : null;
    
        return res.status(200).json({ cart });
    } catch (err) {
        return res.status(500).json({ error: 'Что-то пошло не так' });
    }
}

const removeItem = (req: Request, res: Response) => {
    const id = req.params.id;

    const cart = req.session.cart;
    
    try {
        const itemToDelete = cart.items.find((item: Product) => item.id === id);

        const { price, quantity } = itemToDelete;
        
        cart.totalAmount -= quantity;
        cart.totalPrice -= price;
    
        cart.items = cart.items.filter((item: Product) => item.id !== id);

        req.session.cart = cart.items.length ? cart : null;

        return res.status(200).json({ cart });
    } catch (err) {
        return res.status(500).json({ error: 'Что-то пошло не так' });
    }
}

export { getAll, add, removeOne, removeItem };