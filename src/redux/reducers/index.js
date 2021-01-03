import { combineReducers } from "redux";

import authReducers from "./authReducers";
import boardReducers from "./boardReducers";
import modalReducers from "./modalReducers";
import contentReducers from "./contentReducers";
import detailReducers from "./detailReducers";

export default combineReducers({
    auth: authReducers,
    board: boardReducers,
    modal: modalReducers,
    content: contentReducers,
    detail: detailReducers,
});
