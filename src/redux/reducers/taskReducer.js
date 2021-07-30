import { ADD_TASK, DELETE_TASK, GET_TASKS } from '../constants';

const taskState = {
    tasks: null
};

const taskReducer = (state = taskState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        case ADD_TASK:
            return {
                ...state
            };
        case DELETE_TASK:
            return {
                ...state
            };
        default:
            return {
                state
            };
    }
};

export default taskReducer;