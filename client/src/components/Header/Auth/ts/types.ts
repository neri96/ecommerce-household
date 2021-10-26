import { LoginHover, RegHover } from './interfaces';

export enum HoverType {
    LOGIN_HOVER = 'login_hover',
    REG_HOVER = 'reg_hover'
}

export type HoverAction = | LoginHover | RegHover;

export type TheType = 'login' | 'register';
