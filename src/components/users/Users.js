import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/user.api.service";
import {Route} from "react-router-dom";
import UserDetails from "../user/UserDetails";
import './Users.css';

export default function Users(props) {
    let [users, setUsers] = useState([]);
    let {match: {url}, history} = props;

    useEffect(() => {
        getUsers().then(users => setUsers([...users]))
    }, [])
    return (
        <div className={'wrap_users'}>
            <div className={'users'}> {
                users.map(user => <User key={user.id} user={user} history={history}/>)
            }
            </div>
            <div><Route path={`${url}/:id`} render={(props) => {
                return <UserDetails {...props} />
            }}/></div>
        </div>
    );
}