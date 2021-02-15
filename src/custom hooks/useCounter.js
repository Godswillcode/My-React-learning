import { useState } from 'react'

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount)

    function inCrease(){
        setCount(count +1)
    }

    function reset(){
        setCount(initialCount)
    }

    function deCrease(){
        setCount(count -1)
    }

    return [count, inCrease, reset, deCrease]
      
 
}

export default useCounter
