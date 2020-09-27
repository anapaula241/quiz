import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './Titulo';

ReactDOM.render(
  <React.StrictMode>
    <Titulo titulo="Conhecimentos Gerais"/>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
