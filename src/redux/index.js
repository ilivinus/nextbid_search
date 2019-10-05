import {createStore, combineReducers } from 'redux';
import  c from './action-types';

function keyChangeHandler(state = {}, action){
    switch(action.type){
        case c.KEYDOWN_EVENT:
            if(action.payload === 38)
            return {
                ...state,
                current_focus : state.current_focus + 1
            }
        default:
          return state;
    }
}
export default function store(){
    return createStore({},combineReducers({ key : keyChangeHandler }))
}