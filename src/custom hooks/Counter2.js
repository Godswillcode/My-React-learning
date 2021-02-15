import React from 'react'
import useCounter from './useCounter'


function Counter2(initialCount) {
    const [count, inCrease, reset,  deCrease ] = useCounter(() => initialCount = 10) 
    return (
        <div>
            counter 2
            <h2>Count {count}</h2>
            <button onClick={inCrease}>increase</button>

            <button onClick={reset}>Reset</button>

            <button onClick={deCrease}>decrease</button>
            <br/>
        </div>
    )
}

export default Counter2
