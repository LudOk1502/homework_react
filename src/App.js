import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import CreateCar from "./components/createCar/CreateCar";
import UpdateCar from "./components/updateCar/UpdateCar";

function App() {
    return (
        <Router>
            <div className="App">
                <div className={'wrap'}>
                    <Link to={'/cars'}><h3>Cars</h3></Link>
                    <Link to={'/create-car'}><h3>Create car</h3></Link>
                    <Link to={'update-car'}><h3>Update car</h3></Link>
                </div>
                <Route path={'/cars'} component={Cars}/>
                <Route path={'/create-car'} component={CreateCar}/>
                <Route path={'/update-car'} component={UpdateCar}/>
            </div>
        </Router>
    );
}

export default App;
