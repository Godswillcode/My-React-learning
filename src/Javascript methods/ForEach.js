import React from 'react'

function ForEach() {
    const words = ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'JAVA']

   const forEachWord = words.forEach(word => console.log(word));
     console.log(forEachWord);
        
    return (
        <div>
            
        </div>
    )
}

export default ForEach
