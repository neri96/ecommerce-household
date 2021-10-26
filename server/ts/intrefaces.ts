export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export interface JwtData {
    id: string;
    email: string;
    phone: string;
}

export interface UserData {
    _id: string;
    name: string;
    role: string;
    email: string;
    phone: string;
    password: string;
    refreshToken: string;
}