export default function Post({item: postItem}) {
    return (
        <div>
            <div>userId: {postItem.userId}</div>
            <div>id: {postItem.id}</div>
            <div>title: {postItem.title}</div>
            <div>body: {postItem.body}</div>
            <hr/>
        </div>
    );
}