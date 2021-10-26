import { HoverType } from './types';

export interface LoginHover {
    type: HoverType.LOGIN_HOVER;
    payload: boolean;
} 

export interface RegHover {
    type: HoverType.REG_HOVER;
    payload: boolean;
}

export interface ValuesLogin {
    name: string;
    password: string;
}

export interface Values {
    name: string;
    phone?: string;
    email?: string;
    password: string;
    confirmPassword?: string;
}

export interface InputErrors {
    name?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
}