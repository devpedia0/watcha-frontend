import api from "../../services/api";
import {
    BOARD_FETCH,
    BOARD_INSERT,
    BOARD_UPDATE,
    BOARD_DELETE,
} from "../types";

const fetch = (pathname) => async (dispatch) => {
    try {
        const res = await api.get(`/${pathname}`);
        // const res = await axios.get(
        //     `http://localhost:8080/movies?page=1&size=10`
        // );
        dispatch({
            type: BOARD_FETCH,
            payload: {
                prevPageId: pathname,
                data: res.data,
            },
        });
    } catch (e) {
        console.log(e);
    }
};

const insert = () => {
    return {
        type: BOARD_INSERT,
    };
};
const update = () => {
    return {
        type: BOARD_UPDATE,
    };
};

const remove = () => {
    return {
        type: BOARD_DELETE,
    };
};

const boardActions = {
    fetch,
    insert,
    update,
    remove,
};
export default boardActions;
