import { ADD_TASK, DELETE_TASK, GET_TASKS, NEW_USER, LOADING } from './constants';

export const add_task = () => {
    return {
        type: ADD_TASK
    };
};

export const delete_task = () => {
    return {
        type: DELETE_TASK
    };
};

export const set_loading = () => {
    return {
        type: LOADING
    }
}

export const get_tasks = () => async dispatch => {
    try {

        const res = await fetch("/tasks");
        const data = await res.json();

        dispatch( {
            type: GET_TASKS,
            payload: data
        });
        
    } catch (error) {
        console.error("error found");
    }
};

export const new_user = () => {
    return {
        type: NEW_USER
    };
};