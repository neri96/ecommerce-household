import { useReducer } from 'react';

import { HoverAction, HoverType } from '../ts/types';

interface InitialState {
    loginHover: boolean;
    registerHover: boolean;
}

const initialState = {
    loginHover: false,
    registerHover: false
}

const reducer = (state: InitialState = initialState, action: HoverAction) => {
    const { type, payload } = action;

    switch (type) {
      case HoverType.LOGIN_HOVER:
        return { ...state, loginHover: payload };
      case HoverType.REG_HOVER:
        return { ...state, registerHover: payload };
      default:
        return state;
    }
}

const useHoverIcon = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleHover = ({ type, payload }: HoverAction) => {
        dispatch({ 
            type, 
            payload 
        });
    }

    return { state, dispatch, handleHover }
}

export default useHoverIcon;