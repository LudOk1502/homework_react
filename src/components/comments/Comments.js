import {useEffect, useState} from "react";
import Comment from "../comment/Comment";
import {getComments} from "../../services/comment.service";

export default function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, []);
    return (<div>
        {
            comments.map(commentItem => <Comment key={commentItem.id} item={commentItem}/>)
        }
    </div>)
}