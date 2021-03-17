import React from 'react'

function Button(props) {
    const {category, filterMenu} = props
    return (
        <div>
             <button className="filter-btn" onClick={() => filterMenu(category)}>
                 {category}
            </button>
            
        </div>
    )
}

export default Button
