import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Skill from './Components/Skill'
import Contact from './Components/Contact'
import SignUp from './Components/SignUp'
import './style.css'

function App() {
    return (
        <div>
            <Navbar/>
              <Switch>
                 <Route path="/" exact> <Home/></Route>
                 <Route path="/about" > <About/></Route>
                 <Route path="/skills" > <Skill /></Route>
                 <Route path="/contact" > <Contact/></Route>
                 <Route path="/signup" > <SignUp/></Route>
            </Switch>    
        </div>
    )
}

export default App
