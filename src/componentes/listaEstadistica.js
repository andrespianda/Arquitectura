import React, { Component } from 'react'
import axios from 'axios'

export default class Estadistica extends Component {

    state = {
        users: [],
        Equipo:'',
        pjL: '',
        pgL: '', 
        peL:'',
        ppL:'',
        GFL:'',
        GCL:'',
        DFL:'',
        PtsL:'',
        pjV:'' ,
        pgV: '', 
        peV:'',
        ppV:'',
        GFV:'',
        GCV:'',
        DFV:'',
        PtsV:'',
        pjT:'',
        pgT: '', 
        peT:'',
        ppT:'',
        GFT:'',
        GCT:'',
        DFT:'',
        PtsT:''
    }
    async componentDidMount() {
        this.getestadistica();
        
       // 
    }

    getestadistica= async() =>{
        const res = await axios.get('http://localhost:5000/api/estadistica');
        // this.setState({ users: res.data.map(user => user.usuario) });
        this.setState({ users: res.data });
        console.log(this.state.users)
    }


    onChangeestadistica = e =>{
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
            equipo: this.satate.equipo,
             pjL:  this.state.pjL,
            pgL:  this.state.pgL,
            peL:  this.state.peL,
            ppL:  this.state.ppL,
            GFL:  this.state.GFL,
            GCL:  this.state.GCL,
            DFL:  this.state.DFL,
            PtsL: this.state.PtsL,
            pjV:  this.state.pjV,
            pgV:  this.state.pgV ,
            peV:  this.state.peV,
            ppV:  this.state.ppV,
            GFV:  this.state.GFV,
            GCV:  this.state.GCV,
            DFV:  this.state.DFV,
            PtsV: this.state.PtsV,
            pjT:  this.state.pjT,
            pgT:  this.state.pgT ,
            peT:  this.state.peT,
            ppT:  this.state.ppT,
            GFT:  this.state.GFT,
            GCT:  this.state.GCT,
            DFT:  this.state.DFT,
            PtsT: this.state.PtsT





        };

 
    //   const res = await axios.post('http://localhost:5000/api/estadistica', NuevaEstadistica );
    //    console.log(this.state.estadistica, this.state.equipo)
    //    console.log(res)
    // //     this.getusuarios();
    // }


    render() {
        return (
          <div className="row">
                
            {/* <div className="col-md-6">
                <div className="container mt-5">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header">
                                <h3 align="center">Estadistica</h3>
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
            </div> */}
            
                <div className="col-md-6 mt-5">


                    <table className="table">
                        <thead className="thead-dark">
                            <tr>

                                <th scope="col">Equipo</th>
                                <th scope="col">J</th>
                                <th scope="col">G</th>
                                <th scope="col">E</th>
                                <th scope="col">P</th>
                                <th scope="col">GF</th>
                                <th scope="col">GC</th>
                                <th scope="col">DF</th>
                                <th scope="col">Pts.</th>
                                <th scope="col">J</th>
                                <th scope="col">G</th>
                                <th scope="col">E</th>
                                <th scope="col">P</th>
                                <th scope="col">GF</th>
                                <th scope="col">GC</th>
                                <th scope="col">DF</th>
                                <th scope="col">Pts.</th>
                                <th scope="col">J</th>
                                <th scope="col">G</th>
                                <th scope="col">E</th>
                                <th scope="col">P</th>
                                <th scope="col">GF</th>
                                <th scope="col">GC</th>
                                <th scope="col">DF</th>
                                <th scope="col">Pts.</th>

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