import axios from "axios";
import {GET_ERRORS} from "./types"

export const addUser = (user, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/board", user);
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload:error.response.data
        });
    }
};