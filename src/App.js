import './App.css';
import UserSelectComponent from "./components/userSelectComponent/UserSelectComponent";
import Posts from "./components/posts/Posts";

function App() {
    return (
        <div className="App">
            <UserSelectComponent/>
            <Posts/>
        </div>
    );
}

export default App;
