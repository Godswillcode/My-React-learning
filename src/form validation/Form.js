import React, { useState } from "react";
import validate from "./Validate";

const initialState = { firstName: "", email: "", phone: "", password: "", password2: "" };

const Form = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });

    //check error on while typing
    // const formErrors = validate(person);
    // setErrorMsg(formErrors);
     
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  check error on submit
    const formErrors = validate(person);
    setErrorMsg(formErrors);
    //    console.log(object.keys(formErrors));
    if (Object.keys(formErrors).length) {
      return;
    } else {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson(initialState);
      setErrorMsg(initialState);
    }
  };

  return (
    <div className="mt-5">
      <h2 className="pb-3">Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={person.firstName}
          />
          <span className="d-block text-danger">{errorMsg.firstName}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={person.email}
             className={`${errorMsg.firstName && "border border-danger"}`}
          />
          <span className="d-block text-danger">{errorMsg.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            value={person.phone}
          />
          <span className="d-block text-danger">{errorMsg.phone}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={person.password}
          />
          <span className="d-block text-danger">{errorMsg.password}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm password</label>
          <input
            type="password"
            name="password2"
            onChange={handleChange}
            value={person.password2}
          />
          <span className="d-block text-danger">{errorMsg.password2}</span>
        </div>
        <button type="submit" className="btn btn-primary">
          Add person
        </button>
      </form>

      <div className="mt-4">
        {people.map((person) => {
          return (
            <div key={person.id}>
              <h3>{person.firstName}</h3>
              <h4>{person.email}</h4>
              <h5>{person.phone}</h5>
              <h5>{person.password}</h5>
              <h5>{person.password2}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
