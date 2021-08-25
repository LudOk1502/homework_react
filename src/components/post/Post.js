import {Link} from "react-router-dom";

export default function Post({post}) {
    return (
        <div>
            {post.title} <Link className={'post_details'}
                               to={{pathname: `/posts/${post.id}`, state: post}}>Details</Link>
        </div>
    );
}