import { ModalTypes } from "../ts/action-types"

export const setModalState = (type: ModalTypes) => {
    return { type }
}