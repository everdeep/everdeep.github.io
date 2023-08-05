import { type } from '../actions/types';

const INITAL_STATE: any = {
    isSignedIn: false,
};

const authReducer = (state = INITAL_STATE, action: any) => {
    switch (action.type) {
        case type.SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                ...action.payload,
            };
        case type.SIGN_OUT:
            return {
                isSignedIn: false,
            };
        default:
            return state;
    }
};

export default authReducer;
