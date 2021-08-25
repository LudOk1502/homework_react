import {useEffect, useState} from "react";
import {getUser} from "../../services/user.api.service";

export default function UserDetails(props) {
    let {match: {params: {id}}} = props;
    let [user, setUser] = useState([]);
    useEffect(() => {
        getUser(id).then(user => setUser({...user}))
    }, [id])
    return (
        <div>
            userId: {user.id} <br/>
            userName: {user.name}<br/>
            username: {user.username} <br/>
            email: {user.email}<br/>
            phone: {user.phone}<br/>
            website: {user.website}
        </div>
    );
}