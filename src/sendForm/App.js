import React, { useState } from "react";
import { send } from "emailjs-com";
import validate from "./validate";

const initialState = {
  contactName: "",
  contactPhone: "",
  contactEmail: "",
  contactSubject: "",
  contactMessage: "",
};

function App() {
  const [person, setPerson] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState(initialState);

//   const API_KEY = process.env.REACT_APP_API_KEY  

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });

    // check error onChange
    const formErrors = validate(person);
    setErrorMsg(formErrors);
    if (Object.keys(formErrors).length) {
      return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // check error onSubmit
    const formErrors = validate(person);
    setErrorMsg(formErrors);
    if (Object.keys(formErrors).length) {
      return;
    } else {
      send(`"gmail", "template_ru8l7ls", ${person}, ${process.env.API_KEY}`)
        .then((response) => {
          alert("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          alert("FAILED...", err);
        });

      setPerson(initialState);
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{ background: "green", marginTop: 30, padding: 80 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="contactName"
              id="contactName"
              placeholder="Full name"
              className="py-2 px-3 rounded-sm w-full focus:outline-none"
              value={person.contactName}
              onChange={handleChange}
            />
            <span className="block text-red-300">{errorMsg.contactName}</span>
          </div>
          <div>
            <input
              type="tel"
              name="contactPhone"
              id="contactPhone"
              placeholder="Phone"
              className="py-2 px-3 rounded-sm w-full focus:outline-none"
              value={person.contactPhone}
              onChange={handleChange}
            />
            <span className="block text-red-300">{errorMsg.contactPhone}</span>
          </div>
          <div>
            <input
              type="email"
              name="contactEmail"
              id="contactEmail"
              placeholder="Enter Email"
              className="py-2 px-3 rounded-sm w-full focus:outline-none"
              value={person.contactEmail}
              onChange={handleChange}
            />
            <span className="block text-red-300">{errorMsg.contactEmail}</span>
          </div>
          <div>
            <input
              type="text"
              name="contactSubject"
              id="contactSubject"
              placeholder="Subject"
              className="py-2 px-3 rounded-sm w-full focus:outline-none"
              value={person.contactSubject}
              onChange={handleChange}
            />
            <span className="block text-red-300">
              {errorMsg.contactSubject}
            </span>
            <textarea
              name="contactMessage"
              id="contactMessage"
              className="w-full mt-4 pl-2 pt-2 h-28 resize-none focus:outline-none rounded-sm"
              placeholder="Message"
              value={person.contactMessage}
              onChange={handleChange}
            ></textarea>
            <span className="block text-red-300">
              {errorMsg.contactMessage}
            </span>
          </div>
        </div>
        <div className={`${!errorMsg && "border-2"}`}>
          <button type="submit" className="mt-3 border-2 p-2 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
