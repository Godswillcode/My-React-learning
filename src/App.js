import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TourApp from './Tours/TourApp';
import ScrollToTop from './ScrollTop';

function App() {
  return (
    <>
      <ScrollToTop/>
        <TourApp/>
    </>
  );
}

export default App;
