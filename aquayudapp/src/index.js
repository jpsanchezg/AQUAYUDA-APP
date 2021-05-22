import React from 'react';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import './index.css';

import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// Páginas del Sitio Web
import Home from './components/home/Home';
import Nosotros from './components/nosotros/Nosotros';
import Reporte from './components/reporte/Reporte';



// Configuración de la rutas del Sitio Web 
ReactDOM.render(
  <Router>
    <div>
      <Switch>

        {/* Páginas */}
        <Route exact path='/' component={Home} />
        <Route path='/nosotros' component={Nosotros} />
        <Route path='/reporte' component={Reporte} />


      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();