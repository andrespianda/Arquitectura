import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap/dist/react-bootstrap.min.js'
//import './src/assets/js/script.js'
//import './src/assets/css/css.css'
//import 'jquery/dist/jquery.js'
//import 'bootstrap/dist/js/bootstrap.min.js'
//import 'jquery/dist/jquery.js'
import './App.css';

import Navegacion from './componentes/navegacion'
import listaEstadistica from './componentes/listaEstadistica'
import landingFutbol from './componentes/landingFutbol'
import crearUsuario from './componentes/crearUsuario'
import crearEstadistica from './componentes/crearEstadistica'
import Landingpage from './componentes/landingFutbol';


function App() {
    return (
      <Router>
       <Navegacion/>
       
         
       
        <div className="container p-4">
<Landingpage/>
           <Route path="/landingFutbol" component={landingFutbol}/> 
          <Route path="/crearEstad" component={crearEstadistica}/>
          <Route path="/crearusuario" component={crearUsuario}/>
          <Route path="/listaEstadistica" component={listaEstadistica}/>
        </div>

      </Router>
    );
}

export default App;
