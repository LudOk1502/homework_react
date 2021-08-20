export default function Comment({comment}) {
    return (
        <div>
            {comment.id} - {comment.name}
        </div>
    );
}