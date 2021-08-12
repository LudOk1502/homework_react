import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <div className="App">
            <Users/>
            <h2>Posts</h2>
            <Posts/>
            <h2>Comments</h2>
            <Comments/>
        </div>
    );
}

export default App;