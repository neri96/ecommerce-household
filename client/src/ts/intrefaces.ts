export interface UserInfo {
    id: string;
    role: string;
}

export interface CartItemDetails {
    _id: string;
    images: string[];
    name: string;
    price: number;
    quantity: number;
}

export interface CartData {
    items: [] | CartItemDetails[];
    lastUpdated: string;
    totalAmount: number;
    totalPrice: number;
}