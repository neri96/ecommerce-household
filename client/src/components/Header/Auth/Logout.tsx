import { IoMdExit } from 'react-icons/io';

import { removeUserData } from '../../../utils/storeData';

const Logout = ({ handleAuth }: { handleAuth: () => void }) => {
    const handleClick = () => {
        removeUserData();
        handleAuth();
    }

    return (
        <IoMdExit onClick={handleClick} />
    )
}

export default Logout;