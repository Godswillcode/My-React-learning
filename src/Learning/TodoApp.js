import React from "react";

function TodoApp() {
  const [names, setNames] = React.useState([]);
  const [search, setSearch] = React.useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handler() {
    setNames([
      ...names,
      {
        id: names.length,
        text: search,
      },
    ]);
    setSearch("");
  }

  return (
    <div style={{ textAlign: "center", marginTop: 30 }}>
      <h4>React todo list with useState</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Put todo"
          value={search}
          onChange={handleChange}
        />
        <button onClick={handler}>Add</button>
      </form>
      <hr />
      {names.map((name) => {
        return (
          <div key={name.id}>
            <p>{name.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TodoApp;
