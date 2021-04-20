import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from './ScrollTop';
import CounterOne from './useReducer Hooks/myReducer/CounterOne';




function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <ScrollToTop/>
    <CounterOne/>
    </div>
  );
}

export default App;
