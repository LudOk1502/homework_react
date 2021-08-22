import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../services/user.service";
import Posts from "../posts/Posts";

export default function UserSelectComponent() {
    let [users, setUsers] = useState([]);
    let [userChange, setUserChange] = useState('1');
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(users => setUsers([...users]))
    }, [])

    let onFormSubmit = (e) => {
        e.preventDefault();
    }

    let onUserChange = (e) => {
        setUserChange(e.target.value);
    }
    let postOfUser = () => {
        getPostsOfUser(userChange).then(posts => setPosts([...posts]))
    }
    return (
        <div className={'wrap'}>
            <form onSubmit={onFormSubmit}>
                <select className={'select'} value={userChange} onChange={onUserChange}>
                    {
                        users.map(user => <option value={user.id}> {user.id} - {user.name} </option>)
                    }
                </select>
                <button onClick={postOfUser}>Posts</button>
                <Posts posts={posts}/>
            </form>
        </div>
    );
}
