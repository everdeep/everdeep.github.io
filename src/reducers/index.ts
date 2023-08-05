import { combineReducers } from 'redux';
import authReducer from './authReducer';
import pageReducer from './pageReducer';
import formReducer from './formReducer';
import alertReducer from './alertReducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    page: pageReducer,
    alert: alertReducer,
});
