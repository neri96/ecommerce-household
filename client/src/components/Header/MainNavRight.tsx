import { useState, useEffect, useContext } from 'react';

import AdminIcon from './Admin/AdminIcon';
import Auth from './Auth';
import Cart from './Cart';

import { AuthStatus } from '../../context';
import { getUserData } from '../../utils/storeData';

import * as S from './style';

import { Roles } from '../../ts/types';

const MainNavRight = () => {
    const [currentRole, setCurrentRole] = useState<Roles | null>(null);
    const { isAuth } = useContext(AuthStatus);

    useEffect(() => {
        const userData = getUserData();

        if(isAuth) {
            setCurrentRole(userData.role)
        } else if(!isAuth && currentRole) {
            setCurrentRole(null)
        }
    }, [isAuth])
    
    return (
        <S.MainNavRight>
            {currentRole && Number(currentRole) === Roles.ADMIN && <AdminIcon />}
            <Auth />
            <Cart />
        </S.MainNavRight>
    )
}

export default MainNavRight;