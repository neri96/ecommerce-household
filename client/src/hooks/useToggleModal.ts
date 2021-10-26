import useActions from "./useActions";

import { ModalTypes } from "../ts/types";

const useToggleModal = () => {
    const { setModalState } = useActions();

    const toggleModal = (modalType: ModalTypes) => {
        setModalState(modalType);
    }

    return { toggleModal }
}

export default useToggleModal;