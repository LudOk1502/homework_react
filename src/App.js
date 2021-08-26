import {useReducer} from "react";

const reducer = (state, action) => {
    if (action.obj === '1' && action.diya === '+') {
        return {...state, a: state.a++}
    } else if (action.obj === '1' && action.diya === '-') {
        return {...state, a: state.a--}
    } else if (action.obj === '2' && action.diya === '+') {
        return {...state, b: state.b++}
    } else if (action.obj === '2' && action.diya === '-') {
        return {...state, b: state.b--}
    } else if (action.obj === '3' && action.diya === '+') {
        return {...state, c: state.c++}
    } else if (action.obj === '3' && action.diya === '-') {
        return {...state, c: state.c--}
    }
    return {...state};
}

function App() {
    let [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0})
    return (
        <div className="App">
            <h1>state1 - {a}</h1>
            <button onClick={() => dispatch({obj: '1', diya: '+'})}>inc</button>
            <button onClick={() => dispatch({obj: '1', diya: '-'})}>dec</button>
            <h1>state2 - {b}</h1>
            <button onClick={() => dispatch({obj: '2', diya: '+'})}>inc</button>
            <button onClick={() => dispatch({obj: '2', diya: '-'})}>dec</button>
            <h1>state3 - {c}</h1>
            <button onClick={() => dispatch({obj: '3', diya: '+'})}>inc</button>
            <button onClick={() => dispatch({obj: '3', diya: '-'})}>dec</button>
        </div>
    );
}

export default App;
