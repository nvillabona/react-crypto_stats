import { combineReducers } from "redux";
import coinReducer from "./coin";

const allReducers = combineReducers({
    coin: coinReducer
});

export default allReducers;