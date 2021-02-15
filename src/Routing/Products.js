import React from 'react'
import { Link, useRouteMatch, Route } from 'react-router-dom';

function Products({productData}) {
   
    const { url } = useRouteMatch() 
// console.log(props)
const linkList = productData.map(product => {
  console.log(productData);
    return(
        <li key={product.id}>
            <Link to={`${url}/${product.name}`}> {product.name} </Link>
        </li>
    )
})

    return (
        <div className="container pb-5">
             <ul className="d-flex justify-content-around list-unstyled">{linkList}</ul>

           <Route exact path={url}>
            <h2 className="text-center">Please select a product.</h2>
            </Route>
        </div>
    )
}

export default Products
