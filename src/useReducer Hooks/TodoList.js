import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [modalText, setModalText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleClick = () => {
        setTodos([...todos, text]);
        const message = text;
        setModalText(`${message} has been added`);
        setIsModalOpen(true);
        setText('')
    }

    useEffect(() => {
        setTimeout(() => {
          setIsModalOpen(false);
          setModalText('');
        }, 1500)
    },[todos])

    return (
        <div className="text-center">
            {isModalOpen && <Modal message={modalText}/>}
            <input type="text" value={text} onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
    <ul className="list-unstyled">{todos.map(todo => <li>{todo}</li> )}</ul>
        </div>
    )
}


const Modal = ({message}) => {
    return <div style={{width: 400, background: 'green', color: 'white'}}>
        {message}
    </div>
}

export default TodoList
