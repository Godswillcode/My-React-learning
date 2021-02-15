import React, { Component } from 'react';

class Following extends Component {
  constructor() {
    super()
  
    this.state = {
      count : 0,
      message : "follow",
      isFollowing: false,
      output: "Follow"
    }
  }

  changeMessage = () =>{
      this.setState({
        message: "Following"
      })
  }
  
  increment = () => {
this.setState({
  count: this.state.count + 1
})
  }

  changeFollowing = () => {
    if(this.state.isFollowing) {
            this.setState({
              output: "Fellow"
            })
    }else {
      this.setState({
        output: "Fellowing"
      })
    }
    this.setState({
      isFollowing: !this.state.isFollowing
    })
  }

  render(){
  
    return (
      <div>
          <h1>Instagram follow click</h1>
    <button onClick={this.increment}>Count {this.state.count}</button>
    <button onClick={this.changeMessage}>{this.state.message}</button>
    <button onClick={this.changeFollowing}>{this.state.output}</button>
           <hr />
      </div>
    )
  }
}




export default Following;




import React from 'react';


// Mini cart in Function component (React Hooks)
function App() {
 const handleChange = (event) =>{
    //console.log(event.target.value);
    setSearchTerm(event.target.value)
 }

 
    const list = [
      {
        id: 1,
        name: 'shoe',
        price: 200,
        url: 'https://www.jumia.com',
        rating: 2
      },
      {
        id: 2,
        name: 'fan',
        price: 2000,
        url: 'https://www.jumia.com',
        rating: 4
      },
      {
        id: 3,
        name: 'phone',
        price: 50000,
        url: 'https://www.jumia.com',
        rating: 3
      }
    ]
    const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div>
       <h1>Mini cart</h1>
          <label>Search</label>
           <input type="text" onChange={handleChange} />
           <p>Searching for: {searchTerm}</p>

         
           <hr />
        <List list={list}/>

    </div>
  )
}

function List(props) {
  return (
    <div>
       {props.list.map( item => {
     return(
       <div key={item.id}>
     
      <p>Product: <a href={item.url}>{item.name}</a></p>
     <p>Price: {item.price}</p>
     <span>Rating: {item.rating}</span>
       </div>
     )
   } )}
    </div>
  )
}




export default App
