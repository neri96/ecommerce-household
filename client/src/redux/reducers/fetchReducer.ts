import { Values } from '../ts/interfaces';
import { FetchStartAction, FetchSuccessAction, FetchFailureAction } from '../ts/action-types';

interface UserData {
    tokens: {
        accessToken: string;
        refreshToken: string;
    },
    userInfo: {
        id: string;
        role: string;
    }
}

interface InitialState {
    loading: boolean;
    data: {};
}

interface FetchStart {
    type: FetchStartAction
}

interface FetchSuccess {
    type: FetchSuccessAction,
    payload: any
}

interface FetchFailure {
    type: FetchFailureAction,
    payload: any
}

// interface FetchFailure {
//     type: FetchAction.FETCH_ERROR,
//     payload: null | { message: string } | { message: Values }
// }

type FetchActionAll = | FetchStart | FetchSuccess | FetchFailure;


const createInitialState = () => {
    return {
        loading: false,
        data: {},
        error: {}
    }   
}

const initialState = createInitialState();

interface ActionTypes {
    start: FetchStartAction,
    success: FetchSuccessAction,
    error: FetchFailureAction
}

export const createFetchReducer = (actionTypes: ActionTypes) => {
    return (state: InitialState = initialState, action: FetchActionAll) => {
        switch(action.type) {
            case actionTypes.start:
                return { ...state, loading: true };
            case actionTypes.success:
                return { ...state, loading: false, data: action.payload };
            case actionTypes.error:
                return { ...state, loading: false, error: action.payload };
            default:
                return state;               
        }
    }
}