import React, { useState } from 'react'

function Custom() {
    const [count, setCount] = useState(0)

    function inCrease(){
        setCount(count +1)
    }

    function reset(){
        setCount(0)
    }

    function deCrease(){
        setCount(count -1)
    }


    return (
        <div>
            <h2>Count {count}</h2>
            <button onClick={inCrease}>increase</button>

            <button onClick={reset}>Reset</button>

            <button onClick={deCrease}>decrease</button>
            <br/>
            <CustomChild />
        </div>
    )
}


function CustomChild(){
    const [count, setCount] = useState(0)

    function inCrease(){
        setCount(count +1)
    }

    function reset(){
        setCount(0)
    }

    function deCrease(){
        setCount(count -1)
    }


    return(
        <div className="">
              <h2>Count = {count}</h2>
            <button onClick={inCrease}>increase</button>

            <button onClick={reset}>Reset</button>

            <button onClick={deCrease}>decrease</button>
        </div>
    )
}

export default Custom
