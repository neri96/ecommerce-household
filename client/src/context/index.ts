import { createContext } from 'react';

export const MenuContext = createContext<any>(null);
export const ProductDetailsCtx = createContext<any>({});
export const CartCtx = createContext<any>(null);

export const FetchItemsDetails = createContext<any>(null);
export const AuthStatus = createContext<any>(false);