import { Request, Response } from 'express';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';

import isEmpty from 'lodash.isempty';

import User from '../models/User';

import { JwtData } from '../ts/intrefaces';

const createToken = async (_req: Request, { id, email, phone }: JwtData) => {
    const accessToken = jwt.sign(
        { id, email, phone }, 
        process.env.JWT_KEY, 
        { expiresIn: '7d' }
    );

    // req.session.token = token;
    let now = new Date();
    const expirationDate = now.setDate(now.getDate() + 7);

    return { accessToken, expirationDate };
}

const login = async (req: Request, res: Response) => {
    const { name, password } = req.body;
        const inputValues = req.body;

        const validationErrors: any = {};

        try {
            const user = await User.findOne({ name });

            for(let key in inputValues) {
                if(validator.isEmpty(inputValues[key])) {
                    validationErrors[key] = 'Данное поле обязательно для заполнения';
                }
            }

            if(!isEmpty(validationErrors)) {
                return res.status(400).json({ error: validationErrors });
            } else if(!user) {
                return res.status(404).json({ error: 'Данного пользователя не существует' });
            } 

            const passCorrect = await bcrypt.compare(password, user.password);

            if(!passCorrect) return res.status(403).json({ error: 'Неверный пароль' });
            
            const { _id, email, phone, role } = user;
            
            const { accessToken, expirationDate } = await createToken(req, { id: _id, email, phone });

            await user.save();

            return res.status(200).json({ userInfo: { 
                id: _id, 
                accessToken,
                expirationDate,
                role 
            }});
        } catch (err) {
            return res.status(500).json({ error: 'Что-то пошло не так' });
        }
}

const register = async (req: Request, res: Response) => {
    const { name, phone, email, password, confirmPassword } = req.body;
    const inputValues = req.body;

    const validationErrors: any = {};

    try {
        const userExists = await User.findOne({ phone, email });

        for(let key in inputValues) {
            switch(true) {
                case (validator.isEmpty(inputValues[key])):
                    validationErrors[key] = 'Данное поле обязательно для заполнения';
                case (key === 'phone' && !validator.isMobilePhone(inputValues[key])):
                    validationErrors[key] = 'Неверный формат';
                case (key === 'email' && !validator.isEmail(inputValues[key])):
                    validationErrors[key] = 'Неверный формат';
            }
        }

        if(!isEmpty(validationErrors)) {
            return res.status(400).json({ error: validationErrors });
        } else if(userExists) {
            return res.status(404).json({ error: 'Данный пользователь уже существует' });
        } else if(password !== confirmPassword) {
            return res.status(403).json({ error: 'Пароли не совпадают' });
        }

        const passHashed = await bcrypt.hash(password, 10);

        const user = new User({ name, email, phone, password: passHashed });
        
        await createToken(req, { id: user._id, email, phone });
        
        await user.save();

        const { accessToken, expirationDate } = await createToken(req, { 
            id: user._id, email: user.email, phone: user.phone 
        });

        return res.status(200).json({ userInfo: { 
            id: user._id, 
            accessToken,
            expirationDate,
            role: user.role 
        }});
    } catch (err) {
        return res.status(500).json({ error: 'Что-то пошло не так' });
    }
}

export { login, register };