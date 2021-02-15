import React from 'react'
import QuizData from './QuizData'
function Quiz() {
    return (
        <div>
            {
            QuizData.map((data) => <QuizDisplay key={data.id} question={data.question} answer={data.answer} /> )  
            }
        </div>
    )
}

function QuizDisplay({question, answer}) {
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

export default Quiz
