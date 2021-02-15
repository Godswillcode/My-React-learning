import React from 'react'
import { Link } from 'react-router-dom'
// import './header.css'
import headerStyle from './header.module.css'
import { MyH1, BtnSecondary, Button } from './headStyle'

function Header() {
    return (
        <div>
            <h2 className={headerStyle.heading}>Na my header be this</h2>
            <h4 className={headerStyle.wrapper}>This is my sub-heading</h4>
             <MyH1 color="red">hello</MyH1>
             <MyH1 color="blue">hello</MyH1>
             <BtnSecondary>click</BtnSecondary>
             <BtnSecondary BtnPrimary>click</BtnSecondary>
             <BtnSecondary BtnPrimaryOutline>click</BtnSecondary>


             {/* Route button */}
             <Button as={Link} to="/bottom">Learn more</Button>
             <Button outsideLink href="https://developers.google.com/books/docs/v1/using#ids" target="_blank" rel="noopener" >discover more</Button>

        </div>
    )
}

export default Header
