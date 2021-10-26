import axios from 'axios';

import { getFetchAction } from './getFetchAction';
import { setModalState } from './modalActions';

import { getUserData } from '../../utils/storeData';

import { Methods, FetchType, ModalTypes } from '../../ts/types';
import { Values } from '../ts/interfaces';

export const fetchData = (
    path: string, 
    method: Methods, 
    fetchType: FetchType, 
    data: any = null,
    authReq?: boolean
) => {
    return async (dispatch: any) => {
        const { start, success, error } = getFetchAction(fetchType);

        dispatch({ type: start });
    
        let headers: any = {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }

        if(authReq) {
            const userData = getUserData();
            console.log(userData.accessToken);
            
            if(userData) {
                headers = { ...headers, Authorization: `Bearer ${userData.accessToken}` }
            }
        }

        try {
            const result = await axios({
                method,
                url: `http://localhost:5000${path}`,
                headers,
                data: data ? data : null
            });
    
            dispatch({ type: success, payload: result.data });

            if(fetchType === FetchType.AUTH) {
                const pathStr = path.replace('/auth/', '');

                dispatch({ type: pathStr === ModalTypes.LOGIN ? 
                    ModalTypes.LOGIN : 
                    ModalTypes.REGISTER 
                });
            }

            return result;
        } catch (err: any) {
            dispatch({ type: error, payload: err.response.data.error });
        }
    }
}