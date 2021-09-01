import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TodoList from "../todoList/TodoList";
import {add_todoItem, delete_todoItem, edit_todoItem} from "../../redux/actions";
import './Form.css';

export default function Form() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {todoItems} = state;

    let [formState, setFormState] = useState({title: '', description: ''});
    let [toggle, setToggle] = useState('ADD')

    let onFormSubmit = (e) => {
        e.preventDefault();
    }

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    let id = () => {
        return todoItems.length + 1;
    }

    let deleteItem = (id) => {
        todoItems.slice(id);
        let filterTodoItems = todoItems.filter(value => value.id !== id);
        dispatch(delete_todoItem(filterTodoItems));
    }
    let editTodoItem = (todoItem) => {
        setFormState({title: todoItem.title, description: todoItem.description, id: todoItem.id});
        setToggle('Update');
    };

    let onClickAdd = () => {
        let todoItem = {id: id(), title: formState.title, description: formState.description};
        if (formState.id) {
            let updateTodoItem = todoItems.splice(formState.id - 1, 1, formState)
            dispatch(edit_todoItem(updateTodoItem))
        } else
            dispatch(add_todoItem(todoItem));
        setFormState({title: '', description: ''});
        setToggle('ADD');
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <p> Title <br/>
                    <input type="text" name={'title'} value={formState.title} onChange={onFormInputChange}/>
                </p>
                <p> Description <br/>
                    <input type="text" name={'description'} value={formState.description} onChange={onFormInputChange}/>
                </p>
                <button onClick={onClickAdd}>{toggle}</button>
            </form>
            {
                todoItems.map(value => <TodoList key={value.id} todoItem={value} deleteItem={deleteItem}
                                                 editTodoItem={editTodoItem}/>)
            }
        </div>
    );
}