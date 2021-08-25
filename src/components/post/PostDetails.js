export default function PostDetails({location: {state}}) {
    return (
        <div>
            userId: {state.userId}<br/>
            id: {state.id}<br/>
            title: {state.title}<br/>
            body: {state.body}
        </div>
    );
}