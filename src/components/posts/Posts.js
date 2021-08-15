import {useEffect, useState} from "react";
import {getPosts} from "../../service/post.service";
import Post from "../post/Post";
import './Posts.css';

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);

    useEffect(() => {
        getPosts().then(posts => setPosts([...posts]))
    }, [])
    const oneClickDetails = (post) => {
        setPost({...post});
    }
    return (
        <div className={'wrap'}>
            <div>{
                posts.map(post => <Post key={post.id} post={post} oneClickDetails={oneClickDetails}/>)
            }</div>
            <div>

                {
                    post && <div className={'details'}>
                        userId: {post.userId} <br/>
                        id: {post.id} <br/>
                        title: {post.title} <br/>
                        body: {post.body}
                    </div>
                }</div>
        </div>
    );
}