import './Post.css';

export default function Post({post, oneClickDetails}) {
    const onClickDetails = () => {
        oneClickDetails(post);
    }
    return (
        <div>
            <p>{post.id} {post.title}</p>
            <button onClick={onClickDetails}>Details</button>
        </div>
    );
}