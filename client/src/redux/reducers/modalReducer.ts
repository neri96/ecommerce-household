import { ModalState } from '../ts/interfaces';
import { ModalTypes } from '../ts/action-types';

const initialState = {
    login: false,
    register: false,
    description: false,
    review: false
}

export const modalReducer = (
        state: ModalState = initialState, 
        action: { type: ModalTypes }
    ): ModalState => {
    switch(action.type) {
        case ModalTypes.LOGIN:
            return { ...state, login: !state.login };
        case ModalTypes.REGISTER:
            return { ...state, register: !state.register };
        case ModalTypes.DESCRIPTION:
            return { ...state, description: !state.description };
        case ModalTypes.REVIEW:
            return { ...state, review: !state.review };
        default:
            return state;
    }
}