import React from 'react'
import useCounter from './useCounter'

function Counter1(initialCount) {
 
const [count, inCrease, reset,  deCrease ] = useCounter(() => initialCount = 5)

console.log(useCounter());
    return (
        <div>
            counter1
            <h2>Count {count}</h2>
            <button onClick={inCrease}>increase</button>

            <button onClick={reset}>Reset</button>

            <button onClick={deCrease}>decrease</button>
            <br/>
        </div>
    )
}

export default Counter1
