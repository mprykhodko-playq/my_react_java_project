import axios from "axios";
import {GET_ERRORS, GET_USERS, DELETE_USER, GET_USER} from "./types"

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
    const res = await axios.get("http://localhost:8080/api/board/all");
    dispatch({
        type: GET_USERS,
        payload: res.data
    })
};

export const deleteUser = user_id => async dispatch => {
    if(window.confirm(`You are deleting user ${user_id}, this action can't be undone`)){
        await axios.delete(`http://localhost:8080/api/board/${user_id}`);
        dispatch({
            type: DELETE_USER,
            payload: user_id
        });
    }
};

export const getUser = (user_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/board/${user_id}`);
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    } catch (error) {
        history.push("/");
    }
}