import { Request, Response } from 'express';
import { Categories } from '../ts/types';

import User from '../models/User';
import Product from '../models/Product';

import { tokenMiddleware } from '../middlewares/token';

import { date } from '../constants/date';

const getOne = async (req: Request, res: Response) => {
    const name = req.query.name;
    const category = req.query.category;    

    try {
        const product = await Product.findOne({ name, category })
            .select('-orderedBy').populate('reviews.author');
        
        return res.status(200).json({ product });
    } catch (err) {
        return res.status(500).json({ message: 'Что-то пошло не так' });
    }
}

const getAll = async (req: Request, res: Response) => {
    const amount = Number(req.query.amount);

    try {        
        const { category } = req.params;
        
        const products = await Product.find({ category })
        .sort({ createdAt: -1 })
        .limit(amount);

        const elemsCount = await Product.countDocuments({});

        return res.status(200).json({ 
            products,
            done: ((amount + 10) >= elemsCount)  
        });
    } catch (err) {
        return res.status(500).json({ message: 'Что-то пошло не так' });
    }
}

const create = async (req: Request, res: Response) => {
    const { name, quantity, category, price, images, description } = req.body;

    try {
        const isValidCategory = Object.values(Categories).includes(category);

        if(!isValidCategory) {
            return res.status(422).json({ error: 'Данной категории не существует' });
        }

        const newProduct = new Product({
            name: name.toLowerCase(), 
            quantity,
            category,
            price, 
            images, 
            description
        });

        await newProduct.save();

        return res.status(200).json({ message: 'Товар успешно создан' });
    } catch (err) {
        console.log(err);
        
        return res.status(409).json({ error: 'Что-то пошло не так' });
    }
}

const update = async (req: Request, res: Response) => {
    const productId = req.params.id;
    const values = req.body;

    try {
        const isValidCategory = Object.values(Categories).includes(values.category);

        if(!isValidCategory) {
            return res.status(422).json({ error: 'Данной категории не существует' });
        }
        
        const updatedProduct = await Product.findOneAndUpdate(
            { _id: productId },
            values
        )
        
        await updatedProduct.save();

        return res.status(200).json({ message: 'Товар успешно изменен' });
    } catch (err) {
        return res.status(409).json({ error: 'Что-то пошло не так' });
    }
}

const remove = async (req: Request, res: Response) => {
    const productId = req.params.id;

    try {
        await Product.findOneAndDelete({ _id: productId });

        return res.status(200).json({ message: 'Товар успешно удален' });
    } catch (err) {
        return res.status(409).json({ error: 'Что-то пошло не так' });
    }
}

const addReview = async (req: Request, res: Response) => {
    const productId = req.params.id;
    const { userId, rate, review } = req.body;
    
    try {
        if(review.length < 30) {
            return res.status(403).json({ error: 'Отзыв должен состоять минимум из 30 символов' });
        }

        if(!rate) return res.status(403).json({ error: 'Минимум 1 балл' });

        const product = await Product.findOne({ _id: productId });
        if(!product) return res.status(409).json({ error: 'Данный товар отсутствует' });

        // const decoded: any = tokenMiddleware(req, res);
        // const userId: string = decoded.id;

        const user = await User.findOne({ _id: userId });
        if(!user) return res.status(409).json({ error: 'Данный пользователь не зарегистрирован' });

        const bought = user.purchaseHistory.find((boughtId: string) => boughtId === product._id);
        // if(!bought) return res.status(403).json({ 
        //     error: 'Вы можете оставлять отзывы только на приобретенные Вами товары' 
        // });

        const oldReview = product.reviews.find((userData: { author: string, rate: number, review: string }) => {
            return userData.author.toString() === userId;
        });

        // if(oldReview) return res.status(403).json({ 
        //     error: 'Вы уже оставляли отзыв о данном товаре, благодарим Вас' 
        // });

        product.reviews.unshift({ author: userId, rate, review, createdAt: date });

        await product.save();

        return res.status(200).json({ message: 'Отзыв успешно добавлен' });
    } catch (err) {
        console.log(err);
        return res.status(409).json({ error: 'Что-то пошло не так' });
    }
}

export { getOne, getAll, create, update, remove, addReview };