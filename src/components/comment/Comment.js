import './Comment.css';

export default function Comment({comment, onClickDetails}) {
    const oneClickDetails = () => {
        onClickDetails(comment);
    }
    return (
        <div>
            <p>{comment.id} {comment.name}</p>
            <button onClick={oneClickDetails}>Details</button>
        </div>
    );
}