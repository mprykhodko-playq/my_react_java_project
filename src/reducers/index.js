import {combineReducers} from "redux"
import errorsReducer from "./errorsReducer";
import userReducer from "./userReducer";

export default combineReducers ({
    errors: errorsReducer,
    user: userReducer
});
