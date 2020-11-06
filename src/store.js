import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import reduxThunk from "redux-thunk";

export default createStore(reducers, applyMiddleware(reduxThunk));
