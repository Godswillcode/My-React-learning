import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from './ScrollTop';
import Form from './form validation/Form'




function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <ScrollToTop/>
      <Form />
    </div>
  );
}

export default App;
