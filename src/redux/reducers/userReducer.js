import { NEW_USER } from '../constants';

const userState = {
    users: []
};

const userReducer = (state = userState, action) => {
    switch (action.type) {
        case NEW_USER:
            return {
                ...state
            };
        default:
            return {
                state
            };
    }
};

export default userReducer;