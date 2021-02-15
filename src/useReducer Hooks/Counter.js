import React from 'react'
import { useReducer } from 'react'

const initialState = {
    count: 0,
    countTwo: 5
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return {...state, count: state.count + 1};
        case 'reset': return {...state, count: 0};
        case 'decrement': return {...state, count: state.count - 1};

        case 'incrementTwo': return {...state, countTwo: state.countTwo + 5};
        case 'resetTwo': return {...state, countTwo: 5};
        case 'decrementTwo': return {...state, countTwo: state.countTwo - 5};
        default : return state;
    }
    // if (action === 'increment'){
    //     return state + 1
    // } else if (action === 'reset') {
    //     return 0
    // } else if (action === 'decrement') {
    //     return state - 1
    // } else {
    //     return state
    // }
}

function Counter() {
   const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="text-center">

            <h2>Count {state.count}</h2>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>

            <h2>CountTwo {state.countTwo}</h2>
            <button onClick={() => dispatch({type: 'incrementTwo'})}>Increment</button>
            <button onClick={() => dispatch({type: 'resetTwo'})}>Reset</button>
            <button onClick={() => dispatch({type: 'decrementTwo'})}>Decrement</button>
        </div>
    )
}

export default Counter
