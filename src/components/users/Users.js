import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../services/users.api.service";
import {fetchUsers} from "../../redux/actions";

export default function Users() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {users} = state;

    useEffect(() => {
        getUsers().then(value => dispatch(fetchUsers(value)))
    }, [])
    return (
        <div>
            {
                users.map(value => <div>{value.id} - name: {value.name} - username: {value.username}</div>)
            }
        </div>
    );
}