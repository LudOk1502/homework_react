import {useEffect, useState} from "react";
import {getComment} from "../../services/comment.service";
import Comments from "../comments/Comments";

export default function Post({item}) {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComment(item.id).then((value) => setComments([...value]))
    }, [item.id])

    return (
        <div>
            <h3>Post</h3>
            - {item.title}
            <h4>Comments</h4>
            <Comments item={comments}/>
        </div>
    );
}