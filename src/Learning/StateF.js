import React from 'react'

function StateF() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

     const changeText = () => {
        setIsLoggedIn(!isLoggedIn)
     }
   
     const displayColor = {  }
    //  let btnText;
    //  let display;
    //  if(!isLoggedIn){
    //      btnText = "Log Out";
    //      display = "You are Logged In";
    //      displayColor.color = "red"
    //  }else {
    //      btnText = "Log in"
    //      display = "You are Logged Out";
    //      displayColor.color = "green"
    //  }

     // or Ternary Operator
     let btnText = !isLoggedIn ? "Log Out" : "Log In";
     let display = !isLoggedIn ? "You are Logged In" : "You are Logged Out";
     displayColor.color = !isLoggedIn ? "red" : "green";

    return (
        <div>
            <h2 style={displayColor}>{display}</h2>
           <button onClick={changeText}>{btnText}</button> 
         
    
        </div>
    )
}

/* function ClassWork(){
    const [toggle, setToggle] = React.useState(false);
    const toggleClick = () => setToggle(!toggle)
        
    const myStyle = {
     color: "#000",
     fontSize: 30,
     cursor: "pointer"
    }

    let icon;
    if(!toggle){
        icon = "fas fa-bars";
        myStyle.color = "blue"   
    }else{
        icon = "fas fa-times";
        myStyle.color = "green" 
    }
    
    // Ternary operator
    // let icon = !toggle ? "fas fa-bars" : "fas fa-times";
    // myStyle.color = !toggle ? "blue" : "green"
    return(
        <div>
            <br></br>
    <button onClick={toggleClick} style={myStyle}><i className={icon}></i></button>
        </div>
    )
}
 */


/* // ASSIGNMENT

function Navbar(){
    const [toggle, setToggle] = React.useState(false)

   function show(){
       setToggle(!toggle)
   }

 let menu = ['Home','About','Event']

 const displayNav = { }

   let icon
   if(!toggle) {
     icon = 'fas fa-bars'
     displayNav.display = 'none'
   }else{
    icon = 'fas fa-times' 
    displayNav.display = 'block'
   }

    return(
        <div>
          {
              menu.map(function(myMenu) {
                     return(
                         <div>
                             <h2 style={displayNav}>{myMenu}</h2>
                         </div>
                     )
              })
          }
         <button onClick={show}><i className={icon}></i></button>
        </div>
    )
}
 */
export default StateF
