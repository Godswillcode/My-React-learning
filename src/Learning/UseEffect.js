import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    
    useEffect (() => {
    // document.title = `Clicked ${count} times`;
      console.log('First use Effect rendered');
    }, [countOne])

    function handleClick(){
      setCountOne(
          countOne + 1
      )
    }

// Second useEffect
    useEffect (() => {
        // document.title = `Clicked ${count} times`;
          console.log('Second use Effect rendered');
        },[])
    
        function handleClick2(){
          setCountTwo(
              countTwo + 1
          )
        }

    return (
        <div>
            <h1>Introduction to React UseEffect</h1>  
             <button onClick={handleClick}>Count {countOne}</button>
    <button onClick={handleClick2}>CountTwo {countTwo}</button>
        </div>
    )
}


// Example two
function UseEffectBasic(){
    const [size, setSize] = useState()
    return(
        <div>
            
        </div>
    )
}


export default UseEffect;


// Class component

/* import React, { Component } from 'react'

export default class Testing extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
  
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }
    componentDidUpdate(prev, next) {
        document.title = `Clicked ${this.state.count} times`;
    }
    
    render() {
        return (
            <div>
                <button onClick={() => this.setState({count: this.state.count + 1})}>count {this.state.count}</button>
            </div>
        )
    }
}
 */


// SUB TITLE
// 1 useEffect takes two argument
// 2 its a function that is performing the side effect
// 3 an array to manage dependencies