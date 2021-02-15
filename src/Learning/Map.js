import React from 'react'

 // DAY 2 USING MAP METHOD
function Map() {
    return (
        <div>
            <Schools />
            <Jumia />
        </div>
    )
}

 function Schools() {
  const students = [
    {
      name: "joy",
      dept: "science",
      year: 2020
    },

    {
      name: "Peter",
      dept: "Computer",
      year: 2019
    },

    {
      name: "Hope",
      dept: "Biology",
      year: 2016
    },

    {
      name: "Wole",
      dept: "Business admin",
      year: 2018
    },

    {
      name: "Godswill",
      dept: "Web design",
      year: 2020
    }
  ]
  return(
    <div>
      {students.map(student => {
       
        return (
          <Student person = {student}/>
          
        )
      })}
     
    </div>
  )
}

function Student(props) {
 
  return (
  <div>
    <h2>Name: {props.person.name}</h2>
    <p>Dept: {props.person.dept}</p>
    <p>Year: {props.person.year}</p>

  </div>
  )
} 


// DAY 2 ASSIGNMENT
                                   
function Jumia() {
    let products = [
      { id:1,
        name: "Television",
        price: '30,000'
      },
      { id:2,
        name: "Fridge",
        price: '50,000'
      },
      { id:3,
        name: "Fan",
        price: '15,000'
      },
      {  id:4,
        name: "Generator",
        price: '70,000'
      },
      { id:5,
        name: "Stove",
        price: '10,000'
      },
      { id:6,
        name: "Air condition",
        price: '80,000'
      },
      { id:7,
        name: "Shoe",
        price: '7,000'
      },
      { id:8,
        name: "Designer shirt",
        price: '3,000'
      }
  
    ]
    return(
      <div>
        {
          products.map(product => {
            return(
              <Product key={product.id} buyer={product}/>
            )
          })
        }
    
      </div>
    )
  }   
  
  function Product(props) {
    const {name,price} = props.buyer;
    const priceStyle = {color: "red",
                        fontSize: "20px"
  }
    return(
      <div>
        <h3 className="name">Name: {name}</h3>
        <h4 className="price" style={priceStyle}>Price: {price}</h4>
        <hr></hr>
      </div>
    )
  }

export default Map
