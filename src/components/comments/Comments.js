import Comment from "../comment/Comment";

export default function Comments({item}) {
    return (
        <div>
            {
                item.map(comment => <Comment key={comment.id} item={comment}/>)
            }

        </div>
    );
}