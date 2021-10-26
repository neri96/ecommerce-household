interface ActionError {
    type: 'ERRORS_MSG' | 'CLEAR_ERRORS_MSG',
    payload: string
}

const initialState: string[] = [];

export const errorReducer = (state: string[] = initialState, action: ActionError): string[] => {
    switch(action.type) {
        case 'ERRORS_MSG':
            return [...state, action.payload];
        case 'CLEAR_ERRORS_MSG':
            return [];
        default:
            return state;
    }
}