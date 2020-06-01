import React, { Component } from 'react'
import axios from 'axios'

export default class crearUsuario extends Component {

    state = {
        users: [],
        usuario: '', 
        numIdentif:'',
        nomUsuario1:'',
        nomUsuario2:'',
        Apellido1:'',
        Apellido2:'',
        pass:''
    }
    async componentDidMount() {
        this.getusuarios();
        
       // 
    }

    getusuarios= async() =>{
        const res = await axios.get('http://localhost:5000/api/usuarios');
        // this.setState({ users: res.data.map(user => user.usuario) });
        this.setState({ users: res.data });
        console.log(this.state.users)
    }


    onChangeusuario = e =>{
       this.setState({
            [e.target.name]: e.target.value
            // usuario: e.target.value,
            // numIdentif: e.target.value,
            // nomUsuario1: e.target.value,
            // nomUsuario2: e.target.value,
            // Apellido1: e.target.value,
            // Apellido2: e.target.value,
            // pass: e.target.value

        })
        //console.log(e.target.value)
    }

    onSubmit = async (e) =>{
        e.preventDefault();
        const NuevoUsuario = {
            
            usuario: this.state.usuario, 
            numIdentif: this.state.numIdentif,
            nomUsuario1: this.state.nomUsuario1,
            nomUsuario2: this.state.nomUsuario2,
            Apellido1: this.state.Apellido1,
            Apellido2: this.state.Apellido2,
            pass: this.state.pass

        };

 
      const res = await axios.post('http://localhost:5000/api/usuarios', NuevoUsuario );
       console.log(this.state.usuario, this.state.nombre1)
       console.log(res)
    //     this.getusuarios();
    }


    render() {
        return (
          <div className="row">
                
            <div className="col-md-6">
                <div className="container mt-5">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header">
                                <h3 align="center">CREACION DE USUARIOS</h3>
                                <div className="d-flex justify-content-end social_icon">
                                    <span><i className="fab fa-facebook-square"></i></span>
                                    <span><i className="fab fa-google-plus-square"></i></span>
                                    <span><i className="fab fa-twitter-square"></i></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
 
                                    <div className="input-group form-row form-group">
                                        
                                        <div className="input-group-prepend col">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Nombre" 
                                                name="nomUsuario1"
                                                //value ={this.state.nombre1}
                                                onChange={this.onChangeusuario} />
                                        </div>

                                   
                                        <div className="input-group-prepend col">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Nombre 2"
                                                name="nomUsuario2"
                                                //value ={this.state.nombre2} 
                                                onChange={this.onChangeusuario} />
                                       </div> 
                                    </div>

                                    <div className="input-group form-group form-row">
                                        <div className="input-group-prepend col">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Apellido" 
                                                name="Apellido1"
                                                //value ={this.state.ape1}
                                                onChange={this.onChangeusuario} />
                                        </div>

                                        <div className="input-group-prepend col">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Apellido 2" 
                                                name="Apellido2"
                                                onChange={this.onChangeusuario}/>
                                        </div>
                                    </div>



                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                            <select className="form-control col-md-3" id="exampleFormControlSelect1"  placeholder="Tipo Id" onChange={this.onChangeusuario}>
                                                    <option>CC</option>
                                                    <option>TI</option>
                                                    <option>CE</option>
                                                    <option>RC</option>
                                                    <option>PA</option>
                                            </select>
                                    
                                        <div className="input-group-prepend col-md-9">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="No. Id " 
                                                name="numIdentif"
                                                onChange={this.onChangeusuario} />
                                        </div>
                                    </div>

                                    <br/>
                                    <div className="input-group form-group ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" 
                                                className="form-control" 
                                                placeholder="Usuario. Id " 
                                                name="usuario"
                                                onChange={this.onChangeusuario} />
                                    </div>

                                    <div className="input-group form-group form-row">
                                        <div className="input-group-prepend col-md-6">
                                            <span className="input-group-text"><i className="Envelope"></i></span>
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Password" 
                                                name="pass"
                                                onChange={this.onChangeusuario}/>
                                        </div>
                                    
                                        <div className="input-group-prepend col-md-6">
                                            <span className="input-group-text"><i className="Envelope"></i></span>
                                            <input type="text" 
                                                className="form-control" 
                                                name="pass2"
                                                placeholder="Confirmar Pass" 
                                                // onChange={this.onChangeusuario}
                                                />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                    <button type="submit" className="btn float-right btn-success">
                                        Crear
                                    </button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
                <div className="col-md-6 mt-5">


                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombres</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Identificacion</th>
                                <th scope="col">Usuario / Login</th>
                            </tr>
                        </thead>

                        {
                            this.state.users.map(user => (
                                <tbody key={user._id}>
                                    <tr>
                                        <th scope="row">{user._id}</th>
                                        <td className="form-group">{user.nomUsuario1} {user.nomUsuario2}</td>
                                        <td className="form-group">{user.Apellido1} {user.Apellido2}</td>
                                        <td className="form-group">{user.numIdentif}</td>
                                        <th className="form-group">{user.usuario}</th>

                                    </tr>
                                </tbody>
                            ))
                        }



                    </table>
                </div>

          </div>
        )
    }
}
