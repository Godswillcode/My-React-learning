
/* import React, { Component } from 'react'

export class ParentComponent extends Component {
    // calling constructor function
   constructor(props) {
      super(props)
    this.state = {
       parentName: "Godswill",
    }
    //   this.clickHandler = this.clickHandler.bind(this)
   }
clickHandler = () => {
    this.setState({
        parentName : "Musty"
    })
}
    render() {
        return (
            <div>
                <ChildComponent name={this.state.parentName} clickHandler={this.clickHandler}/>
               
            </div>
        )
    }
}


class ChildComponent extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
         const{name,clickHandler} = this.props
        return (
            <div>
         <h1>{name}</h1> 
         <button onClick={clickHandler}>click</button>
     </div>
     )
    }
}
 */

import React from 'react'
import './ParentComponent.css'

function ParentComponent() {
    const cars = [
        { id: 1, model: 'Benz', inStock: true},
        { id: 2, model: 'Toyota', inStock: false},
        { id: 3, model: 'Honda', inStock: true},
        { id: 4, model: 'Volvo', inStock: false}
    ]
    const names = [
        'Musty',
        'Godswill',
        'Samson',
        'Tobi',
        'Chinny'
    ]

    cars.map(function(car) {
        console.log(car);
    })

    // names.map(function(name){
    //     console.log("Developer" + " "+ name);
    // })

    const [parentName, setParentName] = React.useState("Godwill")
    function clickHandler(){
      setParentName('musty')
    }
    return (
        <div>
       {
            cars.map(function(car) {
                return(
               <CarShow car={car}/>
                )
            })
       }

          {/* {
            names.map(function(name) {
                 return(
                 <Show name={name}/>
                 )
              })
          } */}
           <ChildComponent name={parentName} clickHandler={clickHandler}/>
        </div>
    )
}

function ChildComponent(props){
    const{name,clickHandler} = props
     return(
         <div>
            <h2>{name}</h2> 
            <button onClick={clickHandler}>click</button>
         </div>
     )
}

const Show = ({name}) => <p>{name}</p>
    // const{name} = props


function CarShow({car}){
   
    return(
        <div>
             {/* <p>{car.model}</p> */}
             {/* {car.inStock ? <p>{car.model}</p> : null} */}
          
             {/* {car.inStock ? null : <p>{car.model}</p>} */}
             {/* {!car.inStock && <p>{car.model}</p>} */}

{/* 
             {!car.inStock && <p style={myStyle1}>{car.model}</p>}
             {car.inStock && <p style={myStyle2}>{car.model}</p>} */}
             {/* {!car.inStock ? <p style={myStyle1}>{car.model}</p> : <p style={myStyle2}>{car.model}</p> } */}
            <p className={car.inStock ? 'instock' : 'out-stock'}>{car.model}</p>
        </div>
    )
}    

export default ParentComponent
