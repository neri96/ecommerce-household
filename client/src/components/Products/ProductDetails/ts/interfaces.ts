export interface ProductDetailsProps {
    _id: string;
    name?: string;
    price: number;
    discount: number;
    deliveryPrice: number;
    quantity: number;
    images?: string[];
    category: string;
    description: string;
    reviews: Reviews[];
}

interface Reviews {
    _id: string;
    author: string;
    rate: number;
    review: string;
}