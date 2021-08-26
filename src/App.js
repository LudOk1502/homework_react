import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    if (action.diya === '+') {
        return {...state, a: state.a + 10}
    } else if (action.diya === '-') {
        return {...state, a: state.a - 2}
    }
    return {...state}
}

function App() {
    let [{a}, dispatch] = useReducer(reducer, {a: 0});

    return (
        <div className="App">
            <h1>state - {a}</h1>
            <button onClick={() => dispatch({diya: '+'})}>Збільшити на 10</button>
            <button onClick={() => dispatch({diya: '-'})}>Зменшити на 2</button>
        </div>
    );
}

export default App;
