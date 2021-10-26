import { BsShieldLock } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { NavIcon } from '../style';

import { ModifyType } from '../../../ts/types';

const AdminIcon = () => {
    return (
        <NavIcon>
            <Link to={{ pathname: '/admin', state: { type: ModifyType.ADD } }}>
                <BsShieldLock />
            </Link>
        </NavIcon>
    )
}

export default AdminIcon;