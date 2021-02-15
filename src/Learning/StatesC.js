import React, { Component } from 'react'

export default class StatesC extends Component {
 constructor(props) {
     super(props)
     this.state = {
         isLoggedIn: false
     }
 }

  changeText = () => {
     this.setState ({
         isLoggedIn: !this.state.isLoggedIn
     })
 }
    render() {
         const displayColor = { fontSize: 20 }
        // let btnText;
        // let display;
        // if(this.state.isLoggedIn){
        //     btnText = 'Out';
        //     display = 'In';
        //     displayColor.color = 'green';
        // }else {
        //     btnText = 'In';
        //     display = 'Out';
        //     displayColor.color = 'red';
        // }

        // Or Ternary operator
        let btnText = this.state.isLoggedIn ?  'Out' : 'In';
        let display = this.state.isLoggedIn ?  'In' : 'Out';
        displayColor.color = this.state.isLoggedIn ? "green" : "red";
        return (
            <div>
                <h2 style={displayColor}>You are logged {display}</h2>
                <button onClick={this.changeText}>Log {btnText}</button>
            </div>
        )
    }
}


