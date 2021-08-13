import Address from "../address/Address";
import Company from "../company/Company";
import Posts from "../posts/Posts";
import {useEffect, useState} from "react";
import {getPost} from "../../services/post.service";

export default function User({item: user}) {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPost(user.id).then((value) => setPosts([...value]))
    }, [user.id])
    return (
        <div>
            <h3>{user.id} {user.name}</h3>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <Address address={user.address}/>
            <div>phone: {user.phone}</div>
            <div>website: {user.website}</div>
            <Company company={user.company}/>
            <Posts item={posts}/>
            <hr/>
        </div>
    );
}