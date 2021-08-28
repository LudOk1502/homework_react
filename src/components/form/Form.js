import {useState} from "react";
import {postUser} from "../../services/users.api.service";
import {useDispatch} from "react-redux";
import {pushUser} from "../../redux/actions";

export default function Form() {
    let [formState, setFormState] = useState({name: '', username: ''});
    let dispatch = useDispatch();

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    let onFormSubmit = (e) => {
        e.preventDefault();
    };
    let onSaveClick = () => {
        postUser(formState).then(value => dispatch(pushUser(value)))
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <h2>Add new user</h2>
                <p>name: <br/>
                    <input type="text" name={'name'} value={formState.name} onChange={onFormInputChange}/></p>
                <p>username: <br/>
                    <input type="text" name={'username'} value={formState.username} onChange={onFormInputChange}/></p>
                <button onClick={onSaveClick}>Save</button>
            </form>

        </div>
    );
}