import React from 'react'
import { useParams } from 'react-router-dom'

function Item() {
const { name } = useParams()
// console.log(useParams());
    return (
        <div>
            <h3>This is {name} component</h3>
        </div>
    )
}

export default Item
