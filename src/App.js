import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import TourApp from './Tours/TourApp';
import ScrollToTop from './ScrollTop';
import MenuApp from './Eatery-menu/MenuApp';

function App() {
  return (
    <>
      <ScrollToTop/>
        {/* <TourApp/> */}
        <MenuApp/>
    </>
  );
}

export default App;
