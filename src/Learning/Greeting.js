import React, { Component } from 'react';
import './Greeting.css';

// How to add inline and external css style to react
class Greeting extends Component {
      render(){
        let timeOfDay = null;
            let hr = 17

             let myStyle = {
                 color: "green",
                 fontStyle: "italic"
             }
        
             if(hr < 12) {
                 timeOfDay = "Morning";
                 myStyle.color="red";
                
             }else if (hr < 17) {
                 timeOfDay="Afternoon";
                 myStyle.color="white";
             }else {
                 timeOfDay = "Night";
                 myStyle.color="blue";
             }
          return(
              <div>
                 <h1 className="myh1">hello</h1> 
                 <h2 style={myStyle}> Good {timeOfDay}</h2>  
              </div>
          )
      }
}




export default Greeting