import authReducer from './authReducer';
import postReducer from './authReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,

});

export default rootReducer;