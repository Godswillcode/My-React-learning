import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'


function Category() {
const { url} = useRouteMatch()

    return (
        <div>
            <h1>Category page</h1>
           <ul>
               <li>
                   <Link to={`${url}/shoes`}> Shoes </Link>
               </li>

               <li>
                   <Link to={`${url}/bootes`}> Bootes </Link>
               </li>

               <li>
                   <Link to={`${url}/footwear`}> Footwear </Link>
               </li>
           </ul>

         
        </div>
    )
}

export default Category
