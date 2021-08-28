import './App.css';
import Users from "./components/users/Users";
import Form from "./components/form/Form";

function App() {
    return (
        <div className="App">
            <Form/>
            <h2>All users</h2>
            <Users/>
        </div>
    );
}

export default App;
