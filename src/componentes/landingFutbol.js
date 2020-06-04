import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/css.css'
import '../index.css'
import '../assets/css/my_Style.css'
import jum from '../assets/image/estadio.jpg'
import aleman from '../assets/image/Bundesliga.png'
import italian from '../assets/image/liga_italiana.png'
import espan from '../assets/image/Liga_espanola.png'
import estadio from '../assets/image/estadio.jpg'
import jugador from '../assets/image/Cristiano.png'
import jugador2 from '../assets/image/cabesazo.png'
//import '../assets/js/script'
import 'bootstrap/dist/css/bootstrap.min.css'

//Iconos diseñados por <Link href="https://www.flaticon.es/autores/nikita-golubev" title="Nikita Golubev">Nikita Golubev</Link> from <Link href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</Link>
//hacer una infografia de la materia arquitectura de informacion
//cristi hendriks
//fixed-top esta es para bloquear la barra
export default class Landingpage extends Component {
    render() {
        return (
            <div className=' w-100'>

                <div className="fondojumbo">
                    <div>
                    <img className="imag" src={jum} alt="Foto6" />
                    </div>
                </div>


                <div className="section light-bg" id="features">


                    <div className="contenedor">

                        <div className="section-title">
                            <h3 className='colortext'>TORNEOS POPULARES - NOTICIAS</h3>  
                        </div>


                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="card features">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="ti-face-smile gradient-fill ti-3x mr-3"></span>
                                            <div className="media-body">
                                                <h4 className="card-title">Liga Española</h4>
                                                <img className="escudos" align='left' src={espan} alt="Foto6" />
                                                <p className="card-text" style={{position: 'relative', left: '20px'}}>
                                                    Se acerca la vuelta del fútbol en España: el Gobierno autorizó a La Liga a reanudar su torneo a partir del 8 de junio 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card features">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="ti-settings gradient-fill ti-3x mr-3"></span>
                                            <div className="media-body">
                                                <h4 className="card-title">Liga Italiana</h4>
                                                <p className="card-text"><img className="escudos" align='left' src={italian} alt="Foto6" />Los clubes de la Seria A italiana han recibido el visto bueno para retomar los entrenamientos colectivos, pero deberán esperar hasta el 28 de junio para saber si el campeonato será reanudado.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card features">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="ti-lock gradient-fill ti-3x mr-3"></span>
                                            <div className="media-body">
                                                <h4 className="card-title">Bundesliga</h4>                                                                                               

                                                    <p className> <img className="escudos"align='left' src={aleman} alt="Foto6" />Hay cinco equipos con posibilidades concretas de poder quedarse con el título. Bayern Munich es el único lider con 58 puntos y en búsqueda de su octavo título consecutivo de la mano de su goleador Robert Lewandowski, quien acumula 26 goles en la misma cantidad de partidos.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div style={{ marginTop: '30px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '20px', color: 'white', fontWeight: 'bold' }}> INFORMACION DE INTERES</h3>
                        <div className="d-flex justify-content-between" style={{ marginTop: '30px' }}>



                            <div className="card" style={{ width: "18rem", height: '22rem' }}>
                                <img src={estadio} className="card-img-top" alt="..." style={{ width: "10rem", height: '10rem', margin: 'auto' }} />
                                <div className="card-body">
                                    <h5 className="card-title">ESTADIOS</h5>
                                    <p className="card-text">Aqui encontrará los stadios del Mundo</p>
                                    <Link to='#' className="btn btn-success">Mas informacion >></Link>
                                </div>
                            </div>

                            <div className="card" style={{ width: "18rem", height: '22rem' }}>
                                <img src={jugador} className="card-img-top" alt="..." style={{ width: "10rem", height: '10rem', margin: 'auto' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Ranking Jugadores</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to='#' className="btn btn-success">Mas informacion >></Link>
                                </div>
                            </div>

                            <div className="card" style={{ width: "18rem", height: '22rem' }}>
                                <img src={jugador2} className="card-img-top" alt="..." style={{ width: "10rem", height: '10rem', margin: 'auto' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Goles Jugadores</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to='#' className="btn btn-success">Mas informacion >></Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* <!-- // end .section --> */}


                
                {/*end .section */}
                
                {/* <!-- Footer --> */}
<footer className="w-100 font-small teal pt-4" style={{backgroundColor:"#E3E3E3", width:'100%', marginTop: '60px'}}>

  {/* ]<!-- Footer Text --> */}
  <div className="container-fluid text-center text-md-left">

    {/* <!-- Grid row --> */}
    <div className="row">

      {/* <!-- Grid column --> */}
      <div className="col-md-6 mt-md-0 mt-3">

        {/* <!-- Content --> */}
        <h5 className="text-uppercase font-weight-bold">Footer text 1</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
          repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
          harum esse fugiat. Itaque, culpa?</p>

      </div>
      {/* <!-- Grid column --> */}

      <hr className="clearfix w-100 d-md-none pb-3"/>

      {/* <!-- Grid column --> */}
      <div className="col-md-6 mb-md-0 mb-3">

        {/* <!-- Content --> */}
        <h5 className="text-uppercase font-weight-bold">Footer text 2</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
          commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
          excepturi hic.</p>

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}
        <div className="mb-5 flex-center d-flex justify-content-center" style={{marginTop: '5px', padding: '15px'}} >

          {/* <!-- Facebook --> */}
          <Link to='' >
            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </Link>
          {/* <!-- Twitter --> */}
          <Link >
            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </Link>
          {/* <!-- Google +--> */}
          <Link >
            <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </Link>
          {/* <!--Linkedin --> */}
          <Link >
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </Link>
          {/* <!--Instagram--> */}
          <Link >
            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </Link>
          {/* <!--Pinterest--> */}
          <Link >
            <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
          </Link>
        </div>
      </div>
      {/* <!-- Grid column --> */}

</footer>

            </div >
        )
    }
}
