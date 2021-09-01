import {ADD_TODO, DELETE_TODO, EDIT_TODO} from "./actionTypes";

const add_todoItem = (value) => {
    return {type: ADD_TODO, payload: value}
}
const delete_todoItem = (value) => {
    return {type: DELETE_TODO, payload: value}
}
const edit_todoItem = (value) => {
    return {type: EDIT_TODO, payload: value}
}
export {add_todoItem, delete_todoItem, edit_todoItem};