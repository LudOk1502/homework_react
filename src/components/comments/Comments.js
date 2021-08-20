import {useEffect, useState} from "react";
import {getComments} from "../../services/comments.service";
import Comment from "../comment/Comment";

export default function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(comments => setComments([...comments]))
    }, [])
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }

        </div>
    );
}