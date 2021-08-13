import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/User";
import {getPostOfUser} from "../../services/post.service";
import Posts from "../posts/Posts";
import './Users.css';

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])
    const choseUser = (user) => {
        setUser({...user});
        getPostOfUser(user.id).then(value => setPosts([...value]))
    }

    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map(user => <User key={user.id} user={user} choseUser={choseUser}/>)
                }</div>
            {user && <div className={'chosen-one'}><h3>Posts of user {user.id}</h3> <Posts posts={posts}/></div>}
        </div>
    );
}