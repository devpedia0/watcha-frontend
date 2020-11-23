import { combineReducers } from "redux";

import authReducers from "./authReducers";
import formReducers from "./formReducers";
import boardReducers from "./boardReducers";

export default combineReducers({
    auth: authReducers,
    form: formReducers,
    board: boardReducers,
});
