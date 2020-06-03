import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import {NavDropdown, Nav, Button, Navbar, Form,  Container} from 'react-bootstrap'
//import '../assets/css/css'
import ini from '../assets/image/icon.svg'

//import  React, { Component } from 'react-bootstrap'

export default class navegacion extends Component {
    render() {
        return (

         <div>
            <Navbar bg="light" expand="lg" className="nav-menu fixed-top" >
                <Container>
                <Navbar.Brand>
                    <Link className="navbar-brand" to="/">
                        <img width='40' src= {ini} className="img-fluid" alt="logo" />
                    </Link> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse id="basic-navbar-nav">
                  <div style={{margin: 'auto'}}>   
                    <Nav className="mr-auto">
                        <Nav.Link href="/Home">Inicio</Nav.Link>
                        <Nav.Link href="/Equipos">Equipos</Nav.Link>
                        <Nav.Link href="/Jugadores">Jugadores</Nav.Link>
                        <Nav.Link href="/Estadios">Estadios</Nav.Link>


                        <NavDropdown title="Administrador" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/crearusuario">Crear Nuevo Usuario</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Administracion de estadisticas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Eliminar Usuarios</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Permisos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                 
                  </div>  
                  <Form inline>
                        {/* <FormControl type="text" placeholder="Busqueda" className="mr-sm-2" />
                        <Button variant="outline-success">Buscar</Button> */}
                         <Button 
                         variant="outline-secondary"
                         href="/Login"
                         >Ingresar</Button>
                    </Form>
                </Navbar.Collapse>
               


                </Container>
            </Navbar>
            
            </div>
        )
    }
}
