import { type } from '../actions/types';

const INITAL_STATE: any = {
    activePage: type.PAGE_HOME,
};

const pageReducer = (state = INITAL_STATE, action: any) => {
    switch (action.type) {
        case type.PAGE_HOME:
            return { ...state, activePage: action.type };
        default:
            return state;
    }
};

export default pageReducer;
