import * as Types from '../constants/actionTypes';
import * as Actions from '../actions';

const initialState = [{
    text : 'Hello Ivan!',
    completed : false,
    id : 1
}]

export default function todos(state = initialState, action){
    switch(action.type){
        case Types.ADD_TODO:
            return [
                ...state,
                {
                    id : state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed : false,
                    text : action.text
                }
            ];
        case Types.COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.id ? Object.assign({}, todo, {completed : !todo.completed}) : todo
            );
        default:
            return state;
    }
}