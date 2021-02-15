import React from 'react';

function Mini(){
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
  
const [searchTerm, setSearchTerm] = React.useState('')

function searchHandler(event){
     setSearchTerm(event.target.value)
}

// Filter the product array based on searchTerm
const filterList = list.filter(function(myList){
    return myList.name.toLowerCase().includes(searchTerm.toLowerCase()) || myList.price.toString().includes(searchTerm) 
       
})

  return(
    <div>
      <h1>Mini Cart</h1>
     <Search searchHandler={searchHandler} search={searchTerm}/>
     <p>Searching for: {searchTerm}</p>
      <hr/>

      <List list={filterList}/>
    </div>
  )
}

// List Component
function List(props){
  return(
    <div>
      {
         props.list.map( function(product) {
           return(
           <div key={product.id}>
              <Item  product={product}/>
           </div>
           )
         } )
       }
    </div>
  )
}

// item component
function Item({ product }) {
  const {id, url, name, price, rating} = product
  return(
     <div key={id}>
               <p>Name: <a href={url}>{name}</a></p>
               <p>Price: {price}</p>
               <p>Rating: {rating}</p>
             </div>
  )
}


// Search Component
function Search(props){
  
  const {searchHandler,search} = props
  
  return(
    <div>
       <label>Search</label>
      <input type="text" placeholder="Search" value={search} onChange={searchHandler}/>
   
    </div>
  )
}

export default Mini;