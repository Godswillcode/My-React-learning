import React from 'react'

// React state
// you can import or use it direct
function States() { 

    // Example 1 count on click
    const [count, setCount] = React.useState(0);

    function handleChangeCount(event){
        setCount(count + 1)
      }

      // Example 2 Toggle
  

    return (
        <div>
  <button onClick={handleChangeCount}>Count {count}</button>
        <StateAssignment />
        <ClassWork />
        </div>
    )
}


//State Assignment
function StateAssignment(){
    // const [login, setLogin] = React.useState('')
    // const [logout, setLogout] = React.useState('')
  
  
    //  const logInClick = () => {
    //    if(login === ''){
    //      setLogin('You are Logged in' ,{color:'red'})
    //    }else {
    //      setLogin('')
    //    }
    //  }
  
    //  const logOutClick = () => {
    //   if(logout === ''){
    //     setLogout('You are Logged out')
    //   }else {
    //     setLogout('')
    //   }
    //  }
  
     // p tag color
    //const loginColor = {color: 'green',fontWeight: 'bold'} 
     //const logoutColor = {color: 'red',fontWeight: 'bold'} 
     return(
         <div>
    <hr></hr>
  {/* <p style={loginColor}>{login}</p>
  <p style={logoutColor}>{logout}</p>
  <button onClick={logInClick}>Login</button>
  <button onClick={logOutClick}>Logout</button> */}
         </div>
     )
}


function ClassWork(){
  const [account, setAccount] = React.useState('You are Logged in')

  function click(){
    if(account === 'You are Logged in'){
      setAccount('You are Logged out')
    }else{
      setAccount('You are Logged in')
    }
  }

  return(
    <div>
      <p>{account}</p>
     <button onClick={click}>log in</button>
    </div>
  )
}


// USE STATE WITH CLASS COMPONENT



export default States
