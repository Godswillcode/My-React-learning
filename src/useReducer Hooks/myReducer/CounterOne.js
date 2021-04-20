import React, { useReducer } from 'react'

// const initialState = 0

// const reducer = (state, action) => {
//     switch(action) {
//         case 'increment': 
//         return state + 1
//         case 'decrement': 
//         return state - 1
//         case 'reset': 
//         return initialState
//         default: 
//         return state
//     }
// }

// function CounterOne() {
//     const [count, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             <h3>count: {count}</h3>
//              <div style={{display: 'flex', justifyContent: 'center', gap: 10}}>
//              <button onClick={() => dispatch('increment')}>increment</button>
//             <button onClick={() => dispatch('decrement')}>decrement</button>
//             <button onClick={() => dispatch('reset')}>reset</button>
//              </div>

               
//         </div>
//     )
// }

// try it yourself

const initialName = 'GodsWill'

const reducer = (state, action) => {
    switch(action){
        case 'newName': 
        return state = 'Hope'
        default: 
        return state

    }
}

function ChangeName(){
    const [name, dispatch] = useReducer(reducer, initialName)
    return(
        <div>
           <h2>{name}</h2>
           <button onClick={() => dispatch('newName')}>switch name</button>
        </div>
    )
}

export default ChangeName
