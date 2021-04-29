import React from 'react'
import { useState } from 'react';
import {Route, Switch} from 'react-router-dom'
import Backdrop from './Components/Backdrop';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SideDrawer from './Components/SideDrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
     <>
     <Navbar click={() => setSideToggle(true)}/>
     <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
       <main>
       <Switch>
          <Route path="/"><Home/></Route>
          <Route path="/home"><Home/></Route>
          <Route path="/about"><Home/></Route>
      </Switch>
       </main>
       </>
  );
}

export default App;
