import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INC_A":
            return {...state, a: state.a + 1};
        case "DEC_A":
            return {...state, a: state.a - 1};
        case "INC_B":
            return {...state, b: state.b + 1};
        case "DEC_B":
            return {...state, b: state.b - 1};
        case "INC_C":
            return {...state, c: state.c + 1};
        case "DEC_C":
            return {...state, c: state.c - 1};
        default:
            return {...state};
    }
}

function App() {
    let [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0})
    return (
        <div className="App">
            <h1>state1 - {a}</h1>
            <button onClick={() => dispatch({type: "INC_A"})}>inc</button>
            <button onClick={() => dispatch({type: "DEC_A"})}>dec</button>
            <h1>state2 - {b}</h1>
            <button onClick={() => dispatch({type: "INC_B"})}>inc</button>
            <button onClick={() => dispatch({type: "DEC_B"})}>dec</button>
            <h1>state3 - {c}</h1>
            <button onClick={() => dispatch({type: "INC_C"})}>inc</button>
            <button onClick={() => dispatch({type: "DEC_C"})}>dec</button>
        </div>
    );
}

export default App;
