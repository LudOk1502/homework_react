import {ADD_TODO, DELETE_TODO, EDIT_TODO} from "../actions";

export const reducer = (state = {todoItems: []}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todoItems: [...state.todoItems, action.payload]};
        case DELETE_TODO:
            return {...state, todoItems: [...action.payload]};
        case EDIT_TODO:
            return {...state, todoItems: [...state.todoItems]};
        default:
            return state;
    }
}