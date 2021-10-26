require('dotenv').config();

import express, { Request, Response } from 'express';
import session from 'express-session';
import cors from 'cors';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';

import authRoutes from './routes/auth';
import productRoutes from './routes/products';
import cartRouter from './routes/cart';

const app = express();

app.use(express.json());

declare module 'express-session' {
    interface SessionData {
        token: string,
        cart: any
    }
}

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    cookie: { maxAge: 3600000 * 24 * 7 }
}));

app.use(cors({ origin: process.env.CLIENT }));

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRouter);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
});

app.listen(process.env.PORT, () => {
    console.log(`Running on ${process.env.PORT}`);
});