import React from "react";
import { Switch, Route } from "react-router-dom";
import TourProvider from "./Components/TourProvider";
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Tour from './Pages/Tours'
import ToursDetail from './Pages/ToursDetail'
import NotFoundPage from './Pages/NotFoundPage'

const TourApp = () => {
  return (
    <>
      <TourProvider>
          <Navbar />
          <div style={{ marginTop: "3.7rem" }}></div>

          <Switch>
              <Route exact path="/"> <Home/> </Route>
              
              <Route exact path="/tours"> <Tour/> </Route>

              <Route path="/tours/:tourName">
            <ToursDetail />
          </Route>

          <Route path="*">
              <NotFoundPage/>
          </Route>
          </Switch>


      </TourProvider>
    </>
  );
};

export default TourApp;
