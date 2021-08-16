import {useEffect, useState} from "react";
import {getComments} from "../../service/comment.service";
import Comment from "../comment/Comment";
import './Comments.css';

export default function Comments() {
    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState(null);

    useEffect(() => {
        getComments().then(comments => setComments([...comments]))
    }, [])
    const onClickDetails = (comment) => {
        setComment({...comment});
    }
    return (
        <div className={'wrap'}>
            <div>{
                comments.map(comment => <Comment key={comment.id} comment={comment} onClickDetails={onClickDetails}/>)
            }</div>
            <div>
                {comment && <div className={'details'}>
                    postId: {comment.postId} <br/>
                    id: {comment.id} <br/>
                    name: {comment.name} <br/>
                    email: {comment.email} <br/>
                    body: {comment.body}
                </div>
                }</div>
        </div>
    );
}