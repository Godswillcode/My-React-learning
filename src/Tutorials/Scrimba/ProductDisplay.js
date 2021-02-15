import React from 'react'
import { Products } from './Products'

function ProductDisplay() {
    const ProductListComp = Products.map((product) => <ProductList {...product} key={product.id}/>)
    return (
        <div>
           {ProductListComp}
        </div>
    )
}

function ProductList({name, price, description, id}){
    return(
        <div key={id}>
        <h5>Name: {name}</h5>
        <p>Price: {price.toLocaleString("en-NG",{style: 'currency', currency: 'NGN' })} - {description}</p>
        
                
        </div>
    )
}

export default ProductDisplay
