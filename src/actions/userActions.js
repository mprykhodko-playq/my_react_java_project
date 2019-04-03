import axios from "axios";
import {GET_ERRORS, GET_USERS} from "./types"

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

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/board/all")
    dispatch({
        type: GET_USERS,
        payload: res.data
    })
};