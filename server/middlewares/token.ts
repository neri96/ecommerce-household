import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

export const tokenMiddleware = (req: Request, res: Response) => {
    const bearerToken = req.headers['authorization'];
    
    if(!bearerToken) {
        return res.status(401).json({ error: 'Отсутствует токен' });
    }
    
    const accessToken = (bearerToken as string).split(' ')[1];

    const decoded = jwt.verify(accessToken, process.env.JWT_KEY);
    if(!decoded) return res.status(401).json({ error: 'Неверный токен' });

    return decoded;
}