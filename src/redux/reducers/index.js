import { combineReducers } from "redux";

import authReducers from "./authReducers";
import formReducers from "./formReducers";
import boardReducers from "./boardReducers";
import modalReducers from "./modalReducers";
import contentReducers from "./contentReducers";
import commentReducers from "./commentReducers";
import peopleReducers from "./peopleReducers";

export default combineReducers({
    auth: authReducers,
    form: formReducers,
    board: boardReducers,
    modal: modalReducers,
    content: contentReducers,
    comment: commentReducers,
    people: peopleReducers,
});
