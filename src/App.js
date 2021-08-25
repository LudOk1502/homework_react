import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

function App() {
    return (
        <Router>
            <div className="App">
                <div className={'wrap_link'}><Link to={'/users'}>Users</Link>
                    <Link to={'/posts'}>Posts</Link></div>
                <div><Route path={'/users'} component={Users}/></div>
                <div><Route path={'/posts'} component={Posts}/></div>
            </div>
        </Router>
    );
}

export default App;
