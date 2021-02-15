import React from 'react'
import { BtnPrimary, BtnSecondary } from './btnStyles'

function StyledApp() {
    return (
        <div>
            <BtnPrimary>Click Me</BtnPrimary>
            <BtnSecondary color="pink">New Button</BtnSecondary>
        </div>
    )
}

export default StyledApp
