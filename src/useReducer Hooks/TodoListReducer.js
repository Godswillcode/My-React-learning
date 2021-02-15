import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
  modalText: "",
  isModalOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isModalOpen: true,
        modalText: action.payload,
      };

    default:
      return state;
  }
};

function TodoListReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleClick() {
    if (text.trim() === "") {
      return;
    }
    dispatch({ type: "ADD_ITEM", payload: text });
    setText("");
  }

  return (
    <div className="text-center mt-3">
      {state.isModalOpen && <Modal message={state.modalText} />}
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

const Modal = ({ message }) => {
  return (
    <div style={{ width: 300, background: "green", color: "white" }}>
      {message}
    </div>
  );
};

export default TodoListReducer;
