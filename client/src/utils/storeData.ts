import { UserInfo } from '../ts/intrefaces';
import { UserRoles } from '../ts/types';

const setUserData = (userInfo: UserInfo) => {
    localStorage.setItem(
        'userInfo',
        JSON.stringify(userInfo)
    )
}

const getUserData = (): any => {
    const userInfo = localStorage.getItem('userInfo');

    return userInfo != null && JSON.parse(userInfo);
}

const removeUserData = () => {
    localStorage.removeItem('userInfo');
}

export { 
    setUserData, 
    getUserData, 
    removeUserData 
}