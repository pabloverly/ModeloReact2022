import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from "./Routes/Router";
import Header from "./Components/Header/Top/Index"


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);