import React, { Component } from 'react'

import pascual from '../assets/image/pascual.jpg';
import bernabeu from '../assets/image/bernabeu.jpeg';
import palmaseca from '../assets/image/palmaseca.jpg';
import camp from '../assets/image/camp.jpg';



export default class Estadios extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                
        

                

             <div className="card ml-3" style={{width: "18rem", position:"relative",top:"80px"}}>
               <img src={pascual} className="card-img-top" alt="..."/>
                    <div className="card-body">
                          <p class="d-flex justify-content-center h3">pascual guerrero</p>
                    </div>
             </div>

                <div className="card ml-3" style={{width: "18rem", position:"relative",top:"80px"}}>
                      <img src={bernabeu} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <p class="d-flex justify-content-center h3">bernabeu</p>
                    </div>
                </div>

                <div className="card ml-3" style={{width: "18rem", position:"relative",top:"80px"}}>
                      <img src={palmaseca} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <p class="d-flex justify-content-center h3">palmaseca</p>
                    </div>
                </div>
                <div className="card ml-3" style={{width: "18rem", position:"relative",top:"80px"}}>
                      <img src={camp} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <p class="d-flex justify-content-center h3">camp nou</p>
                    </div>
                </div>





            </div>
           
        )

    }

}