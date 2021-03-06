import React from "react";
import "./Birthday.css";

function Birthday() {
  const BirthdayPeople = [
    {
      id: 1,
      img: "images/1.jpg",
      name: "Wisdom",
      age: "24 years",
    },
    {
      id: 2,
      img: "images/2.jpg",
      name: "Pamela",
      age: "25 years",
    },
    {
      id: 3,
      img: "images/3.jpg",
      name: "Chinny",
      age: "30 years",
    },
    {
      id: 4,
      img: "images/4.jpg",
      name: "Musty",
      age: "27 years",
    },
    {
      id: 5,
      img: "images/5.jpg",
      name: "Blessing",
      age: "26 years",
    },
  ];
  const [people, setPeople] = React.useState(BirthdayPeople);

  const clearAll = () => {
    setPeople([]);
  };

  const showBd = () => {
    setPeople(BirthdayPeople);
  };

  return (
    <div className="my_Container">
      <h2>
        {people.length} Birthday
        <span style={{ display: people.length === 0 && "none" }}>s</span> Today
      </h2>
      {people.map((person) => {
        return (
          <div className="wrap" key={person.id}>
            <img src={person.img} className="image" alt="birthday" />
            <div className="content">
              <h5>{person.name}</h5>
              <p>{person.age}</p>
            </div>
          </div>
        );
      })}
      <div className="btnDiv">
        <button onClick={people.length !== 0 ? clearAll : showBd}>
          {people.length !== 0 ? "Clear All" : "Show Birthday"}
        </button>
      </div>
    </div>
  );
}

export default Birthday;
