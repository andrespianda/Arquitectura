import React, { Component } from 'react'
import Mujer from '../assets/image/Fut_Mujer.png'
import 'bootstrap/dist/css/bootstrap.min.css'



export default class Login extends Component {
    render(){

    return(

        <div>
            <h3 style={{ paddingTop: '80px', fontSize: '40px', textAlignLast: 'center', color: 'white', fontWeight: 'bold'}}>Ingresar</h3>
        <div className='row' style={{ paddingTop: '18px', margin: 'auto' }}>
            <div className=" col " style={{paddingTop: '20px', 
                width: '5rem', height: '16rem', backgroundColor: '#e3e3e3' /* Opacidad 60% */
            }}>
           

                <form >
                    <div className="form-group ">
                        <label for="exampleInputEmail1">Correo Electronico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
    
                    <button type="submit"  href="/" className="btn btn-success">Ingresar</button>
                </form>
            </div>
            <div className="col" style={{ textAlignLast: 'center'}}>
                <img src={Mujer} className="card-img-top" alt="..." style={{ width: "20rem", height: '25rem'}} />
            </div>
        </div>
        </div>
)}};