import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'



import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './Titulo';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <div className="card mt-5">
      <div className="card-body"></div>
      <Titulo titulo="Conhecimentos Gerais" />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
