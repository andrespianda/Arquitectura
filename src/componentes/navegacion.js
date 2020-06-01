import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import {NavDropdown, Nav, Button, Navbar, Form, FormControl, Container} from 'react-bootstrap'
//import '../assets/css/css'
import ini from '../assets/image/icon.svg'

//import  React, { Component } from 'react-bootstrap'

export default class navegacion extends Component {
    render() {
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
            <Navbar bg="light" expand="lg" className="nav-menu fixed-top" >
                <Container>
                <Navbar.Brand>
                    <Link className="navbar-brand" to="/landingFutbol">
                        <img width='40' src= {ini} className="img-fluid" alt="logo" />
                    </Link> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/">Equipos</Nav.Link>
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
