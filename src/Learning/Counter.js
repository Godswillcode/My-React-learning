import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    render() {
        let display

        if(this.state.count === 0) {
            display = "Logged in" 
        }else {
            display ="Logged Out"
        }
        return (
            <div>
                <p>{display}</p>
            </div>
        )
    }
}

export default Counter
