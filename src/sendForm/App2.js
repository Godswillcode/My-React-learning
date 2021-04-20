import React, { useState } from 'react'

const initialState = {
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentPhone: "",
    relationship: "",
    parentAddress: "",
    childFirstName: "",
    childMiddleName: "",
    childLastName: "",
    childDOB: "",
    schoolYear: "",
    classApply: "",
    preferredName: "",
    gender: "",
    SiblingAttendBell: ""
  };
function App2() {
  
      const [person, setPerson] = useState(initialState);
      const [errorMsg, setErrorMsg] = useState(initialState);
      const [people, setPeople] = useState([]);

      const handleChange = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value });
      }

      const handleSubmit = (e) => {
        e.preventDefault();
   
          const newPerson = { ...person, id: new Date().getTime().toString() };
          setPeople([...people, newPerson]);
          setPerson(initialState);
         
      };
    

    return (
        <div>
               {/* Main Application */}
      <div className="container px-5 flex justify-center mb-20 mt-10">
        <div className="lg:w-3/4 bg-gray-400 px-3 pt-4 pb-16">
          <h2 className="font-medium text-2xl py-3">
            PARENT/GUARDIAN INFORMATION
          </h2>

          <form onSubmit={handleSubmit}>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-2">
                <input
                  type="text"
                  name="parentFirstName"
                  id="parentFirstName"
                  placeholder="First name"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                  onChange={handleChange}
                  value={person.parentFirstName}
                />

                <input
                  type="text"
                  name="parentLastName"
                  id="parentLastName"
                  placeholder="Last name"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                  onChange={handleChange}
                  value={person.parentLastName}
                />

                <input
                  type="tel"
                  name="parentPhone"
                  id="parentPhone"
                  placeholder="Phone"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                  onChange={handleChange}
                  value={person.parentPhone}
                />

                <input
                  type="email"
                  name="parentEmail"
                  id="parentEmail"
                  placeholder="Enter Email"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                  onChange={handleChange}
                  value={person.parentEmail}
                />

                <select
                  name="relationship"
                  id="relationship"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                  onChange={handleChange}
                  value={person.relationship}
                >
                  <option>Relationship to Child</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="guardian">Guardian</option>
                </select>
              </div>
              <input
                type="text"
                name="parentAddress"
                id="parentAddress"
                placeholder="Enter Full Address, house, street, city and State."
                className="py-2 px-3 rounded-sm w-full focus:outline-none mt-4"
                onChange={handleChange}
                value={person.parentAddress}
              />

              {/* child information */}
              <h2 className="font-medium text-2xl mt-10">
                CHILD'S INFORMATION
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-3">
                <input
                  type="text"
                  name="childFirstName"
                  id="childFirstName"
                  placeholder="First name"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                  onChange={handleChange}
                  value={person.childFirstName}
                />

                <input
                  type="text"
                  name="childMiddleName"
                  id="childMiddleName"
                  placeholder="Middle name"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                  onChange={handleChange}
                  value={person.childMiddleName}
                />

                <input
                  type="text"
                  name="childLastName"
                  id="childLastName"
                  placeholder="Last name"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                  onChange={handleChange}
                  value={person.childLastName}
                />

                <input
                  type="text"
                  name="preferredName"
                  id="preferredName"
                  placeholder="Preferred name (if any)"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                  onChange={handleChange}
                  value={person.preferredName}
                />

                <input
                  type="text"
                  name="childDOB"
                  placeholder="Date of Birth"
                  onFocus={(e) => {
                    e.currentTarget.type = "date";
                    e.currentTarget.focus();
                  }}
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                  onChange={handleChange}
                  value={person.childDOB}
                />

                <input
                  type="text"
                  name="schoolYear"
                  id="parentPhone"
                  placeholder="School year applying for"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                  onChange={handleChange}
                  value={person.schoolYear}
                />

                <select
                  name="classApply"
                  id="classApply"
                  className="py-2 px-3 rounded-sm w-full focus:outline-none"
                  onChange={handleChange}
                  value={person.classApply}
                >
                  <option>Class applying for </option>
                  <option value="Creche">Creche</option>
                  <option value="Pre-school">Pre-school</option>
                  <option value="Elementary">Elementary</option>
                  <option value="After-school">After-school</option>
                </select>
                <div>
                  <label className="block font-medium">Gender:</label>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  <label htmlFor="male">Male</label>

                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    className="ml-3 mr-1"
                    onChange={handleChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div>
                  <label className="block font-medium">
                    Sibling attends or will attend Bell's?
                  </label>
                  <input
                    type="radio"
                    id="no"
                    name="SiblingAttendBell"
                    value="no"
                    className="mr-1"
                    onChange={handleChange}
                  />
                  <label htmlFor="no">No</label>

                  <input
                    type="radio"
                    id="yes"
                    name="SiblingAttendBell"
                    value="yes"
                    className="ml-3 mr-1"
                    onChange={handleChange}
                  />
                  <label htmlFor="yes">Yes</label>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  className="bg-blue-300 text-white py-2 rounded-md font-medium text-xl w-full md:w-3/4 lg:w-2/4 focus:outline-none hover:opacity-70"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>


 <div className="mt-4 ml-10">
        {people.map((person) => {
          return (
            <div key={person.id}>
              <h3>First name: {person.parentFirstName}</h3>
              <h4>last name: {person.parentLastName}</h4>
              <h4>Email: {person.parentEmail}</h4>
              <h4>Phone: {person.parentPhone}</h4>
              <h4>Relationship: {person.relationship}</h4>
              <h4>Address: {person.parentAddress}</h4>
             
             <h1>Childs info</h1>

             <h4>First Name: {person.childFirstName}</h4>
             <h4>Last Name: {person.childLastName}</h4>
             <h4>Middle Name: {person.childMiddleName}</h4>
             <h4>Preferred Name: {person.preferredName}</h4>
             <h4>schoolYear: {person.schoolYear}</h4>
             <h4>Class apply: {person.classApply}</h4>
             <h4>Gender: {person.gender}</h4>
             <h4>Birth: {person.childDOB}</h4>
             <h4>SiblingAttendBell: {person.SiblingAttendBell}</h4>
            </div>
          );
        })}
      </div>
        </div>
    )
}

export default App2
