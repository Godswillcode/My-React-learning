import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './App.css'
import App from './Navbar4/Navbar'

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


