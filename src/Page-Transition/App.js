import React from 'react'
import './pageApp.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';

function App() {
  let location = useLocation(); 
 
  return (
    <div className="myApp">
    <Navbar/>
       <AnimatePresence exitBeforeEnter>
       <Switch location={location} key={location.pathname}>
        <Route exact path="/"> <Home/> </Route>
        <Route  path="/about"> <About/> </Route>
        <Route  path="/services"> <Services/> </Route>
      </Switch>
       </AnimatePresence>
    </div>
  );
}

export default App;
