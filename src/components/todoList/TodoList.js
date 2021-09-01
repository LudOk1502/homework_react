import './TodoList.css';

export default function TodoList({todoItem, deleteItem, editTodoItem}) {
    let onClickDelete = () => {
        deleteItem(todoItem.id);
    }
    let onClickEdit = () => {
        editTodoItem(todoItem);
    }
    return (
        <div className={'todo_item'}>
            <div>{todoItem.id} - Title: {todoItem.title}
            </div>
            <div>Description: {todoItem.description}</div>
            <div className={'btn_todoItem'}>
                <button onClick={onClickDelete}>DELETE</button>
                <button onClick={onClickEdit}>EDIT</button>
            </div>
        </div>
    );
}