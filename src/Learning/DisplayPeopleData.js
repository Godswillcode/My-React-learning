import React from 'react'
import { Peopledata } from './Peopledata'

function DisplayPeopleData() {
    const [people, setPeople] = React.useState(Peopledata)
    const [search, setSearch] = React.useState('')

    const handleChange = (e) => {
      setSearch(e.target.value)
    }

    const AddPerson = (e) => {
       e.preventDefault()
       if(search.trim() === ''){
           return
       }
       setPeople([...people,
               {
                   id: people.length + 1,
                   name: search
               }
       ])
       setSearch([])
    }

    const clearAll = () => {
        setPeople([])
    }
 
   const deletePerson = (id) => {
       const newPeople = people.filter((person) => {
          return person.id !== id
       })
       setPeople(newPeople)
   }
   
    return (
        <div>

       <h4 className="text-center">{people.length} People in the Group</h4>
       <div className="d-flex justify-content-center">
       <form>
        <input type="text" value={search} onChange={handleChange}/>
        <button onClick={AddPerson}>Add</button>
        </form>
       </div>

           {
               people.map((person => <Person person={person} key={person.id} deletePerson={deletePerson} search={search}/>))     
           }
          <div className="d-flex justify-content-center">
          <button className="btn btn-danger mt-3" onClick={clearAll}>Clear All</button>
          </div>
        </div>
    )
}

function Person({person, deletePerson}){
    return(
        <div key={person.id} className="d-flex justify-content-around mt-3">
            <h5>{person.name}</h5>
             <button onClick={() => deletePerson(person.id)}>Delete</button>
        </div>
    )
}

export default DisplayPeopleData
