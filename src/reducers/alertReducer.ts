import { type } from '../actions/types';

const INITAL_STATE: any = {
    active: false,
    message: '',
    className: '',
};

const alertReducer = (state = INITAL_STATE, action: any) => {
    switch (action.type) {
        case type.ALERT:
            return {
                ...state,
                active: true,
                message: action.payload.message,
                className: action.payload.className,
            };
        case type.ALERT_CLEAR:
            return {
                ...state,
                active: false,
                // message: '',
                // className: ''
            };
        default:
            return state;
    }
};

export default alertReducer;
