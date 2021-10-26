export interface ModalState {
    login: boolean;
    register: boolean;
    description: boolean;
    review: boolean;
}

export interface Values {
    name: string;
    phone?: string;
    password: string;
    confirmPassword?: string;
}