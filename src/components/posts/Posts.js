import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.api.service";
import Post from "../post/Post";
import {Route} from "react-router-dom";
import PostDetails from "../post/PostDetails";
import './Posts.css';

export default function Posts(props) {
    let {match: {url}} = props;
    let [posts, setPost] = useState([]);
    useEffect(() => {
        getPosts().then(posts => setPost([...posts]))
    }, [])
    return (
        <div className={'wrap_posts'}>
            <div className={'posts'}>{
                posts.map(post => <Post key={post.id} post={post}/>)
            }</div>
            <div className={'post_info'}><Route path={`${url}/:id`} render={(props) => {
                return <PostDetails {...props}/>
            }}/></div>

        </div>
    );
}