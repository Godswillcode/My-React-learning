import React from 'react'

function Joke() {
    return (
        <div>
             <ChildComp answer="Buhari"/>
             <ChildComp question="what is computer"/>
            <ChildComp question="Define music" answer="Arrangement of sound"/>
            <ChildComp question="What is css" answer="Cascading style shit"/>
            <ChildComp question="Define javascript" answer="Server side programing language"/>
            <ChildComp question="The full meaning of Html" answer="Hyper text markup language"/>
            <ChildComp question="What is React" answer="javascript library"/>
        </div>
    )
}

function ChildComp({question, answer}){
    return(
        <div>
            {/* <h3 style={{display: question ? "block" : "none"}}>Question: {question}</h3> */}
            {/* OR */}
            <h3 style={{display: !question && "none", color: !answer && '#888'}}>Question: {question}</h3>
            <p style={{color: !question && '#888', display: !answer && "none"}}><b>Answer:</b> {answer}</p>
            <hr/>
        </div>
    )
}

export default Joke
