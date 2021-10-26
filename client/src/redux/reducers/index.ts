import { combineReducers } from "redux";

import { modalReducer } from "./modalReducer";
import { createFetchReducer } from './fetchReducer';
import { updateCartReducer } from './updateCartReducer';
import { errorReducer } from './errorReducer';

import { ActionStart, ActionSuccess, ActionFailure } from '../ts/action-types';

const { AUTH_START, CART_START, FETCH_START, PRODUCTS_START, ONE_PRODUCT_START } = ActionStart;
const { AUTH_SUCCESS, CART_SUCCESS, FETCH_SUCCESS, PRODUCTS_SUCCESS, ONE_PRODUCT_SUCCESS } = ActionSuccess;
const { AUTH_FAILURE, CART_FAILURE, FETCH_FAILURE, PRODUCTS_FAILURE, ONE_PRODUCT_FAILURE } = ActionFailure;

const rootReducer = combineReducers<any>({
  modalState: modalReducer,
  productState: createFetchReducer({ start: PRODUCTS_START, success: PRODUCTS_SUCCESS, error: PRODUCTS_FAILURE }),
  oneProductState: createFetchReducer({ start: ONE_PRODUCT_START, success: ONE_PRODUCT_SUCCESS, error: ONE_PRODUCT_FAILURE }),
  authState: createFetchReducer({ start: AUTH_START, success: AUTH_SUCCESS, error: AUTH_FAILURE }),
  cartState: createFetchReducer({ start: CART_START, success: CART_SUCCESS, error: CART_FAILURE }),
  fetchState: createFetchReducer({ start: FETCH_START, success: FETCH_SUCCESS, error: FETCH_FAILURE }),
  updateCartState: updateCartReducer,
  errorState: errorReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;