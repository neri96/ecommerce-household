import { FetchType } from '../../ts/types';
import { ActionStart, ActionSuccess, ActionFailure } from '../ts/action-types';

interface FetchActionObj {
    start: ActionStart | null,
    success: ActionSuccess | null,
    error: ActionFailure | null
}

export const getFetchAction = (fetchType: FetchType): FetchActionObj => {
    switch(fetchType) {
        case FetchType.PRODUCTS:
            return {
                start: ActionStart.PRODUCTS_START,
                success: ActionSuccess.PRODUCTS_SUCCESS,
                error: ActionFailure.PRODUCTS_FAILURE
            }
        case FetchType.ONE_PRODUCT:
            return {
                start: ActionStart.ONE_PRODUCT_START,
                success: ActionSuccess.ONE_PRODUCT_SUCCESS,
                error: ActionFailure.ONE_PRODUCT_FAILURE
            }
        case FetchType.AUTH:
            return {
                start: ActionStart.AUTH_START,
                success: ActionSuccess.AUTH_SUCCESS,
                error: ActionFailure.AUTH_FAILURE
            }
        case FetchType.CART:
            return {
                start: ActionStart.CART_START,
                success: ActionSuccess.CART_SUCCESS,
                error: ActionFailure.CART_FAILURE
            }
        case FetchType.FETCH_MSG:
            return {
                start: ActionStart.FETCH_START,
                success: ActionSuccess.FETCH_SUCCESS,
                error: ActionFailure.FETCH_FAILURE
            }
        default:
            return {
                start: null,
                success: null,
                error: null
            }
    }
}