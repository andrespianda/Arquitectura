


// <div className="d-flex justify-content-between">

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

// </div>

//--------------------------- codigo de app con modificacion-------------------------------------
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

//import equipos
import Navegacion from './componentes/navegacion'
import listaEstadistica from './componentes/listaEstadistica'
import landingFutbol from './componentes/landingFutbol'
import crearUsuario from './componentes/crearUsuario'
import datosJugador from './componentes/crearEstadistica'
import Login from './componentes/login';
import equipos from './componentes/equipos';

class App extends React.Component{

  constructor (props){
    super(props);
  };
consultar(){
  let almacenamiento = sessionStorage.getItem("sesion");

  if (almacenamiento == null || almacenamiento == undefined){

    return 0;
    
  }else {
    return almacenamiento;
  }
  


};

  render(){
  
    return (
      <Router>
       <Navegacion logeado={this.consultar()} history={this.props.history} />
        <div className="container p-4">
          <Route path="/datosJugador" component={datosJugador} />
          <Route path="/landingFutbol" component={landingFutbol}/>
          <Route path="/crearusuario" component={crearUsuario}/>
          <Route path="/listaEstadistica" component={listaEstadistica}/>
          <Route path="/login" component={Login}/>
          <Route path="/equipos" component={equipos}/>

        </div>


      </Router>
    );


  }

   
}

export default App;




//---------------NAVBAR-----------------------------------

import React, { Component } from 'react'
//import { Link } from 'react-router-dom' 
import {NavDropdown, Nav, Button, Navbar, Form, FormControl, Container} from 'react-bootstrap'
//import '../assets/css/css'

//import  React, { Component } from 'react-bootstrap'

export default class navegacion extends Component {
    salir(e){
        e.preventDefault();
        sessionStorage.removeItem("sesion");
        //this.props.history.push("/");
        window.location="http://localhost:3000";
    }
    render() {
        let logeado = this.props.logeado;
        return (
            // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            //     <div className="container">
            //         <Link className= "navbar-brand" to="/">
            //             Futbol - APP
            //         </Link>
            //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon"></span>
            //         </button>

            //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //             <ul className="navbar-nav ml-auto">
            //                 <li className="nav-item active">

            //                     <Link className="nav-link" to="/crearusuario">Inicio</Link>
            //                 </li>
            //                 <li className="nav-item">
            //                 <Link className="nav-link" to="/listaEstadistica">Estadisticas</Link>
            //                 </li>
            //                 <li className="nav-item dropdown">
            //                     <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" onClick={(e) => this.handleOption(e)} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Usuarios (Administrador)</Link>
            //                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            //                         <Link className="dropdown-item" to="/crearusuario">Crear Usuarios</Link>
            //                         <Link className="dropdown-item" to="/">Another action</Link>
            //                         <div className="dropdown-divider"></div>
            //                         <Link className="dropdown-item" to="/">Something else here</Link>
            //                     </div>
            //                 </li>
            //             </ul>
            //             <form className="form-inline my-2 my-lg-0">
            //                 <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            //                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            //             </form>
            //         </div>


            //     </div>

            // </nav> className="fixed-top nav"
         <div>
            <Navbar bg="light" expand="lg" className="nav-menu" >
                <Container>
                <Navbar.Brand href="/landingFutbol">Futbol App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/">Equipos</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        {logeado == 1 ? <Nav.Link href="/">prueba</Nav.Link> : null}
                        {logeado == 1 ? <Nav.Link href="/" onClick={(e)=>this.salir(e)}>salir</Nav.Link> : null}
                        <NavDropdown title="Administrador" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/crearusuario">Crear Nuevo Usuario</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            
            </div>
        )
    }
}



///-------------------------LOGIN-----------------------

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/css.css'
//import '../assets/js/script'
import 'bootstrap/dist/css/bootstrap.min.css'


//hacer una infografia de la materia arquitectura de informacion
//fixed-top esta es para bloquear la barra
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            usuario:"",
            password:"",
            logeado: "0"


        }
        
    }
    logearse(){
        const {usuario,password}=this.state;
        if (usuario == "pepito" && password == "123"){
            sessionStorage.setItem("sesion", "1");
            this.setState({logeado: "1"});
            this.props.history.push("/login");

        }else {
            this.setState({logeado: "0"});

        }
        
    }
    
    render() {

        const {usuario,password}=this.state;
    
        return (
            <div><form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={usuario} onChange={(e)=>this.setState({usuario:e.target.value})} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>this.setState({password:e.target.value})} />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>this.logearse()}>Submit</button>
          </form>
          </div>
        )
    }
}