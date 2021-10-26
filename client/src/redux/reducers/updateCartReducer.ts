import { updateCartAction } from "../actionCreators";
import { UpdateCart } from "../ts/action-types";

const initialState = {
    updated: false
}

export const updateCartReducer = (
        state: { updated: boolean } = initialState, 
        action: { type: UpdateCart }
    ): { updated: boolean } => {
    switch(action.type) {
        case updateCartAction:
            return { ...state, updated: !state.updated };
        default:
            return state;
    }
}