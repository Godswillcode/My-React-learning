import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
     <>
     <Navbar/>
      
      <Switch>
          <Route path="/"><Home/></Route>
          <Route path="/home"><Home/></Route>
          <Route path="/about"><Home/></Route>
      </Switch>
       </>
  );
}

export default App;
