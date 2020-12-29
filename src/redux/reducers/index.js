import { combineReducers } from "redux";

import authReducers from "./authReducers";
import formReducers from "./formReducers";
import boardReducers from "./boardReducers";
import modalReducers from "./modalReducers";

export default combineReducers({
    auth: authReducers,
    form: formReducers,
    board: boardReducers,
    modal: modalReducers,
});
