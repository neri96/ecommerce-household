import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '../redux/reducers';

const useReducerState = (stateName: string | null = null) => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

    const state = useTypedSelector((state: any) => state);

    return stateName ? state[stateName] : state;
}

export default useReducerState;