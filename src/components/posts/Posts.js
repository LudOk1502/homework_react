import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import Post from "../post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])
    return (
        <div>
            {posts.map((postItem) => <Post key={postItem.id} item={postItem}/>)}
        </div>
    );
}