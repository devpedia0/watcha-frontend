import { MODAL_CHANGE, MODAL_CLOSE } from "../types";

const setModal = (modal) => {
    return {
        type: MODAL_CHANGE,
        payload: modal,
    };
};

const closeModal = () => {
    return {
        type: MODAL_CLOSE,
    };
};

const modalActions = { setModal, closeModal };

export default modalActions;
