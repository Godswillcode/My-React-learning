import React from 'react'

function TodoItem({text, completed, id, handleChange}) {
const completedStyle = {
    color: 'red',
    textDecoration: 'line-through',
    fontStyle: 'italic'
}

    return (
        <div className="todo-item" key={id}>
            <input type="checkbox" checked={completed}  onChange={() => handleChange(id)}/>
         <p style={completed? completedStyle : null}>{text}</p>
        </div>
    )
}

export default TodoItem
