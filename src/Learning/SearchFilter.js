import React from 'react'

function SearchFilter() {
const states = [
    {
        id: 1,
        name: 'Abia',
        capital: 'Umuahia'
    },
    {
        id: 2,
        name: 'Adamawa',
        capital: 'Yola'
    },
    {
        id: 3,
        name: 'Akwa Ibom',
        capital: 'Uyo'
    },
    {
        id: 4,
        name: 'Anambara',
        capital: 'Akwa'
    },
    {
        id: 5,
        name: 'Bauchi',
        capital: 'Bauchi'
    },
    {
        id: 6,
        name: 'Bayelsa',
        capital: 'Yenagoa'
    },
    {
        id: 7,
        name: 'Benue',
        capital: 'Makurdi'
    },
    {
        id: 8,
        name: 'Borno',
        capital: 'Maiduguri'
    },
    {
        id: 9,
        name: 'Cross River',
        capital: 'Calabar'
    },
    {
        id: 10,
        name: 'Delta',
        capital: 'Asaba'
    }

]

const [searchState, setSearchState] = React.useState('')

const search = (e) => {
  return  setSearchState(e.target.value)
}

const states1 = states.filter(function(state) {
    return state.name.toLowerCase().includes(searchState.toLowerCase()) || state.capital.toLowerCase().includes(searchState.toLowerCase())
})

    return (
        <>
        <h2>States and Capital</h2>
        <input type="text" placeholder="Search state" onChange={search}/>
       
        {
           states1.map(function(state){
               return(
                   <div key={state.id}>
                       <table>
                           <tr>
                              <td>{state.name}</td>
                              <td>{state.capital}</td> 
                           </tr>
                       </table>
                   </div>
               )
           })
       }
        {/* <ShowState states={states1}/>   */}
        </>
    )
}

// function ShowState(props){
//     return(
//         <>
//     {
//            props.states.map(function(state){
//                return(
//                    <div key={state.id}>
//                        <table>
//                            <tr>
//                               <td>{state.name}</td>
//                               <td>{state.capital}</td> 
//                            </tr>
//                        </table>
//                    </div>
//                )
//            })
//        }
//         </>
//     )
// }

export default SearchFilter;



