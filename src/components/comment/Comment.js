export default function Comment({item: commentItem}) {
    return (
        <div>
            <div>postId: {commentItem.postId}</div>
            <div>id: {commentItem.id}</div>
            <div>name: {commentItem.name}</div>
            <div>email: {commentItem.email}</div>
            <div>body: {commentItem.body}</div>
            <hr/>
        </div>
    );
}

