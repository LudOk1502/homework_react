import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <Router>
            <div className="App">
                <div className={'wrap'}>
                    <Link to={'/users-page'}>Users</Link>
                    <Link to={'/posts-page'}>Posts</Link>
                    <Link to={'/comments-page'}>Comments</Link>
                </div>
                <div className={'content'}>
                    <Route path={'/users-page'} component={Users}/>
                    <Route path={'/posts-page'} component={Posts}/>
                    <Route path={'/comments-page'} component={Comments}/></div>
            </div>
        </Router>
    );
}


export default App;
