import { Request, Response, NextFunction } from 'express';

import User from '../models/User';

import { tokenMiddleware } from './token';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const decoded = tokenMiddleware(req, res);

    const { id, email, phone }: any = decoded;
    
    const user = await User.findOne({ _id: id, email, phone });
    if(!user) return res.status(404).json({ error: 'Пользователя не существует' });

    next();
}