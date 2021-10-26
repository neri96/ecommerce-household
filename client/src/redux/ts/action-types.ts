export type fetchFailure = 'FETCH_FAILURE';

export type UpdateCart = 'update_cart_data';

export enum ModalTypes {
    LOGIN = 'login',
    REGISTER = 'register',
    DESCRIPTION = 'description',
    REVIEW = 'review'
}

export enum ActionStart {
    AUTH_START = 'auth_start',
    PRODUCTS_START = 'products_start',
    ONE_PRODUCT_START = 'one_product_start',
    CART_START = 'cart_start',
    FETCH_START = 'fetch_start',
}

export enum ActionSuccess {
    AUTH_SUCCESS = 'auth_success',
    PRODUCTS_SUCCESS = 'products_success',
    ONE_PRODUCT_SUCCESS = 'one_product_success',
    CART_SUCCESS = 'cart_success',
    FETCH_SUCCESS = 'fetch_success',
}

export enum ActionFailure {
    AUTH_FAILURE = 'auth_failure',
    PRODUCTS_FAILURE = 'products_failure',
    ONE_PRODUCT_FAILURE = 'one_product_failure',
    CART_FAILURE = 'cart_failure',
    FETCH_FAILURE = 'fetch_failure',
}


export type FetchStartAction =
| ActionStart.FETCH_START
| ActionStart.AUTH_START
| ActionStart.PRODUCTS_START
| ActionStart.ONE_PRODUCT_START
| ActionStart.CART_START

export type FetchSuccessAction = 
| ActionSuccess.FETCH_SUCCESS
| ActionSuccess.AUTH_SUCCESS
| ActionSuccess.PRODUCTS_SUCCESS
| ActionSuccess.ONE_PRODUCT_SUCCESS
| ActionSuccess.CART_SUCCESS;

export type FetchFailureAction = 
| ActionFailure.FETCH_FAILURE
| ActionFailure.AUTH_FAILURE
| ActionFailure.PRODUCTS_FAILURE
| ActionFailure.ONE_PRODUCT_FAILURE
| ActionFailure.CART_FAILURE;

// export type MethodType = `${Methods}`;