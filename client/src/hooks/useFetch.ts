import { Methods, FetchType } from '../ts/types';

import useActions from './useActions';
import useReducerState from './useReducerState';

interface RequestProps {
    path: string;
    method: Methods;
    value?: any;
    authReq?: boolean;
    onCompleted?: (data: any) => void;
}

const getState = (fetchType: FetchType, state: any) => {
    switch(fetchType) {
        case FetchType.PRODUCTS:
            return state.productState;
        case FetchType.ONE_PRODUCT:
            return state.oneProductState;
        case FetchType.AUTH:
            return state.authState;
        case FetchType.CART:
            return state.cartState;
        case FetchType.FETCH_MSG:
            return state.fetchState;
    }
}

let data: any;

const useFetch = (fetchType: FetchType) => {
    const state = useReducerState();
    const { fetchData } = useActions();

    data = getState(fetchType, state);

    const sendRequest = async ({ path, method, value, authReq, onCompleted }: RequestProps) => {
        await fetchData(
            path, 
            method, 
            fetchType, 
            value,
            authReq
        ) 
        
        console.log(data, 'test test test');
        if(onCompleted) {
            onCompleted(data);
        }
    }

    return { 
        response: data,
        sendRequest
    }
}

export default useFetch;