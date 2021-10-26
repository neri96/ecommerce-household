export enum UserRoles {
    ADMIN = 'admin',
    MODERATOR = 'moderator',
    USER = 'user'
}

export enum ModalTypes {
    LOGIN = 'login',
    REGISTER = 'register',
    DESCRIPTION = 'description',
    REVIEW = 'review'
}

export enum ModifyType {
    ADD = 'add',
    EDIT = 'edit'
}

export enum Methods {
    GET = 'get',
    POST = 'post',
    PATCH = 'patch',
    DELETE = 'delete'
}

export enum Roles {
    ADMIN = 2,
    CUSTOMER = 1
}

export enum RenderType {
    ADD_ITEMS = 'add',
    UPDATE_ITEMS = 'update'
}

export enum FetchType {
    AUTH = 'auth',
    PRODUCTS = 'products',
    ONE_PRODUCT = 'one_product',
    CART = 'cart',
    FETCH_MSG = 'fetch_msg'
}

export enum Categories {
    HYGIENE = 'hygiene',
    KITCHEN = 'kitchen',
    AUTO = 'auto',
    OTHER = 'other'
}

// export enum ModalTypeEnum {
//     GLOBAL = 'global',
//     LOCAL = 'local'
// }

export enum ReviewStarType {
    STATIC = 'static',
    DYNAMIC = 'dynamic'
}