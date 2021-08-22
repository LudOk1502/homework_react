export default function Post({post}) {
    return (
        <div>
            {post.userId} - {post.id} - {post.title}
        </div>
    );
}