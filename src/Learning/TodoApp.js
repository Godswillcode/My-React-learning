import React from 'react'

function TodoApp2() {
    return (
        <div>
            {/* <TodoList /> */}
            <Date />
        </div>
    )
}

/*  function TodoList() {
    const [names, setNames] = React.useState([])
    const [search, setSearch] = React.useState('')

    function handleChange(e){
        setSearch(e.target.value)
    }
    function handler(){
        setNames([...names,
           {
           id: names.length,
           text: search
           }])
           setSearch('')
    }
    return (
        <div>
            <h1>React todo list with useState</h1>

             <input type="text" value={search} onChange={handleChange} />
           <button onClick={handler}>Add</button>
            <hr />
                {
                    names.map((name) =>{
                       return(
                           <div key={name.id}>
                               <p>{name.text}</p>
                           </div>
                       )
                    })
                }
        </div>
    )
}
  */


// TodoList Assignment

function Date() {

// css style
const tableStyle1 = {
   width: '80%',
   margin: 'auto',
   overFlow: 'hidden',
   textAlign: 'center',
}

const tableStyle2 = {
    background: 'black',
    color: 'white'
}

const inputStyle = {
     marginTop: '8px',
     width: '200px',
     height: '23px',
     fontSize: '18px'
}

const btnStyle = {
    fontSize: '18px',
    cursor: 'pointer' 
}

    // Date useState
    const [search1, setSearch1] = React.useState('')
    const [date, setDate] = React.useState([])

    function handleChange1(event){
        setSearch1(event.target.value)
    }

    function handler1(){
         setDate([...date,
        {
           id: date.length,
            text1: search1
        } ])
         setSearch1('')
    }

// City useState
const [search2, setSearch2] = React.useState('')
const [city, setCity] = React.useState([])

function handleChange2(e){
    setSearch2(e.target.value)
}

function handler2(){
     setCity([...city,
    {
       id: date.length,
        text2: search2
    } ])
     setSearch2('')
}


// State useState
const [search3, setSearch3] = React.useState('')
const [state, setState] = React.useState([])

function handleChange3(e){
    setSearch3(e.target.value)
}

function handler3(){
     setState([...state,
    {
       id: date.length,
        text3: search3
    } ])
     setSearch3('')
}

    return(
        <div>
            <h1 style={tableStyle1}>ENTER PROTEST LOCATION, END SARS 💩</h1> <br />
<table style={tableStyle1}>
<thead>
   <tr style={tableStyle2}>
        {/* Date input */}
   <th>
       <input type="text" placeholder="Enter date" value={search1} onChange={handleChange1} style={inputStyle}/>
            <button style={btnStyle} onClick={handler1}>Add</button> 
            <h2>Date</h2>
    </th>

      {/* City input */}
    <th>
         <input type="text" placeholder="Enter city" value={search2} onChange={handleChange2} style={inputStyle}/>
            <button style={btnStyle} onClick={handler2}>Add</button>
            <h2>City</h2>
    </th>

     {/* State input */}
    <th> <input type="text" placeholder="Enter state" value={search3} onChange={handleChange3} style={inputStyle}/>
            <button style={btnStyle} onClick={handler3}>Add</button>
             <h2>State</h2>
    </th>
   </tr>
</thead>
   <tbody>

        <tr>
            {/* Date mapping */}
        <td>  {
                date.map(function(myDate1) {
                    return (
                        <div key={myDate1.id}>
                            <h2>{myDate1.text1}</h2>
                          
                        </div>
                    )
                })
            }</td>

            {/* City mapping */}
                <td>  {
                city.map(function(myDate2) {
                    return (
                        <div key={myDate2.id}>
                            <h2>{myDate2.text2}</h2>
                          
                        </div>
                    )
                })
            }</td>

             {/* State mapping */}
   <td>        
       {
                state.map(function(myDate3) {
                    return (
                        <div key={myDate3.id}>
                            <h2>{myDate3.text3}</h2>
                          
                        </div>
                    )
                })
            }</td>
        </tr>


</tbody>
</table>

        </div>
    )
}

export default TodoApp2;

