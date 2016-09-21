import {combineReducers} from 'redux';
import todos from './todos';
import { routerReducer } from 'react-router-redux-ie8'

const rootReducer = combineReducers({
    todos
});

export default rootReducer;
