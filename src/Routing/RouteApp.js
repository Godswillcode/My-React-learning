import React from 'react'
import Navbar from './Navbar'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Category from './Category'
import Products from './Products'
import Product from './Product'
import {productData} from './productData'

function RouteApp() {
  return (
    <div>
      <Navbar />

        <Switch>

        <Route exact path="/"> <Home/> </Route>
         <Route path="/about"> <About/> </Route>
         <Route path="/category"> <Category/> </Route>
         <Route exact path="/products"> <Products productData={productData}/> </Route>

    
         <Route path="/products/:productName">
                 <Product data={productData}/>
              </Route>
        </Switch>
    </div>
  )
}

export default RouteApp
