import { combineReducers } from "redux";

import authReducers from "./authReducers";
import boardReducers from "./boardReducers";

export default combineReducers({
    auth: authReducers,
    board: boardReducers,
});
