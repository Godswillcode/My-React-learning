import React, { useState } from 'react'

function Form1() {
const [people, setPeople] = useState([])
const [person, setPerson] = useState({firstName: "", lastName: "", email: "", age: ""})

const handleChange = (e) => {
  const name = e.target.name
  const value = e.target.value;
   setPerson({...person, [name]: value})
}

const handleSubmit = (e) => {
 e.preventDefault()
 setPeople([...people, person])
  setPerson({firstName: "", lastName: "", email: "", age: ""})
}

    return (
        <div>
          <form onSubmit={handleSubmit}>
              <label>FirstName:</label>
              <input type="text" name="firstName" value={person.firstName} onChange={handleChange}/><br/>

              <label>LastName:</label>
              <input type="text" name="lastName" value={person.lastName} onChange={handleChange}/><br/>

              <label>Your Email:</label>
              <input type="email" name="email" value={person.email} onChange={handleChange}/><br/>
              
              <label>Your Age:</label>
              <input type="number" name="age" value={person.age} onChange={handleChange}/><br/>

              <button type="submit">Submit</button>
          </form>
         
         {/* Display value */}
         {people.map(person => {
             const {firstName, lastName, email, age} = person
             return(
                 <div key={firstName}>
                <br/>
                 <h4>{firstName} {lastName}</h4>
                 <p>{email}</p>
                 <p>{age}</p>
                 </div>
             )
         })}
        </div>
    )
}

export default Form1
