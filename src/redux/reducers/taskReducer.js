import { ADD_TASK, DELETE_TASK, GET_TASKS, LOADING } from '../constants';

const taskState = {
    tasks: null,
    loading: false
};

const taskReducer = (state = taskState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
                loading: false
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