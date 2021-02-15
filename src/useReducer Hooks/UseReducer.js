import React, { useState } from 'react'

function UseReducer() {
    const data  = [
        {
           id: 1,
            name: 'Tobi'
        },
        {
            id: 2,
            name: 'Ade',
        },
    ]

 const [people, setPeople] = useState(data)
 const [search, setSearch] = useState('')

 function handleChange(e) {
    setSearch(e.target.value)
 }

 function addPerson(e) {
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
    return (
        <div className="text-center">
            <h2>UseReducer</h2>
            <form>
                <input type="text" value={search} onChange={handleChange}/>
                <button onClick={addPerson}>Add</button>
            </form>

            {people.map((person) => {
                return(
                <div key={person.id}>
                    <h4>Name : {person.name}</h4>
                </div>
                )
            })}
        </div>
    )
}

export default UseReducer
