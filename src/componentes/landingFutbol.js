import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Jumbotron  from 'react-bootstrap/Jumbotron'
import Button  from 'react-bootstrap/Button'
import '../assets/css/css.css'
import '../index.css'
import '../assets/css/my_Style.css'
import jum from '../assets/image/estadio.jpg'
import aleman from '../assets/image/Bundesliga.png'
import italian from '../assets/image/liga_italiana.png'
import espan from '../assets/image/Liga_espanola.png'
//import '../assets/js/script'
import 'bootstrap/dist/css/bootstrap.min.css'

//Iconos diseñados por <a href="https://www.flaticon.es/autores/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
//hacer una infografia de la materia arquitectura de informacion
//cristi hendriks
//fixed-top esta es para bloquear la barra
export default class Landingpage extends Component {
    render() {
        return (
            <div>

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
                                                <p className="card-text"><img className="escudos" align='left' src={espan} alt="Foto6" />Se acerca la vuelta del fútbol en España: el Gobierno autorizó a La Liga a reanudar su torneo a partir del 8 de junio </p>
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



                </div>
                {/* <!-- // end .section --> */}
                <div className="section">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-6">
                                <div className="box-icon"><span className="ti-mobile gradient-fill ti-3x"></span></div>
                                <h2>Discover our App</h2>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione </p>
                                <Link to="#" className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                        <div className="perspective-phone">
                            <img src="images/perspective.png" alt="perspective phone" className="img-fluid" />
                        </div>
                    </div>

                </div>
                {/* <!-- // end .section --> */}


                <div className="section light-bg">
                    <div className="container">
                        <div className="section-title">
                            <small>FEATURES</small>
                            <h3>Do more with our app</h3>
                        </div>

                        <ul className="nav nav-tabs nav-justified" role="tablist">
                            <li className="nav-item">
                                <Link className="nav-link active" data-toggle="tab" to="#communication">Communication</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" to="#schedule">Scheduling</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" to="#messages">Messages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" to="#livechat">Live Chat</Link>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="communication">
                                <div className="d-flex flex-column flex-lg-row">
                                    <img src="images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                    <div>

                                        <h2>Communicate with ease</h2>
                                        <p className="lead">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                                        congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                            </p>
                                        <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor
                                        sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.
                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="schedule">
                                <div className="d-flex flex-column flex-lg-row">
                                    <div>
                                        <h2>Scheduling when you want</h2>
                                        <p className="lead">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                                        congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                            </p>
                                        <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor
                                        sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.
                            </p>
                                    </div>
                                    <img src="images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="messages">
                                <div className="d-flex flex-column flex-lg-row">
                                    <img src="images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                    <div>
                                        <h2>Realtime Messaging service</h2>
                                        <p className="lead">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                                        congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                            </p>
                                        <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor
                                        sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.
                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="livechat">
                                <div className="d-flex flex-column flex-lg-row">
                                    <div>
                                        <h2>Live chat when you needed</h2>
                                        <p className="lead">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                                        congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                            </p>
                                        <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor
                                        sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.
                            </p>
                                    </div>
                                    <img src="images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                {/* <!-- // end .section --> */}

                <div className="section">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="images/dualphone.png" alt="dual phone" className="img-fluid" />
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div>
                                    <div className="box-icon"><span className="ti-rocket gradient-fill ti-3x"></span></div>
                                    <h2>Launch your App</h2>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione </p>
                                    <Link to="#" className="btn btn-primary">Read more</Link></div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* <!-- // end .section --> */}


                <div className="section light-bg">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 d-flex align-items-center">
                                <ul className="list-unstyled ui-steps">
                                    <li className="media">
                                        <div className="circle-icon mr-4">1</div>
                                        <div className="media-body">
                                            <h5>Create an Account</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem </p>
                                        </div>
                                    </li>
                                    <li className="media my-4">
                                        <div className="circle-icon mr-4">2</div>
                                        <div className="media-body">
                                            <h5>Share with friends</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem eveniet</p>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <div className="circle-icon mr-4">3</div>
                                        <div className="media-body">
                                            <h5>Enjoy your life</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <img src="images/iphonex.png" alt="iphone" className="img-fluid" />
                            </div>

                        </div>

                    </div>

                </div>
                {/* <!-- // end .section --> */}


                <div className="section">
                    <div className="container">
                        <div className="section-title">
                            <small>TESTIMONIALS</small>
                            <h3>What our Customers Says</h3>
                        </div>

                        <div className="testimonials owl-carousel">
                            <div className="testimonials-single">
                                <img src="images/client.png" alt="client" className="client-img" />
                                <blockquote className="blockquote">Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.</blockquote>
                                <h5 className="mt-4 mb-2">Crystal Gordon</h5>
                                <p className="text-primary">United States</p>
                            </div>
                            <div className="testimonials-single">
                                <img src="images/client.png" alt="client" className="client-img" />
                                <blockquote className="blockquote">Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.</blockquote>
                                <h5 className="mt-4 mb-2">Crystal Gordon</h5>
                                <p className="text-primary">United States</p>
                            </div>
                            <div className="testimonials-single">
                                <img src="images/client.png" alt="client" className="client-img" />
                                <blockquote className="blockquote">Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.</blockquote>
                                <h5 className="mt-4 mb-2">Crystal Gordon</h5>
                                <p className="text-primary">United States</p>
                            </div>
                        </div>

                    </div>

                </div>
                {/* <!-- // end .section --> */}


                <div className="section light-bg" id="gallery">
                    <div className="container">
                        <div className="section-title">
                            <small>GALLERY</small>
                            <h3>App Screenshots</h3>
                        </div>

                        <div className="img-gallery owl-carousel owl-theme">
                            <img src="images/screen1.jpg" alt="image" />
                            <img src="images/screen2.jpg" alt="image" />
                            <img src="images/screen3.jpg" alt="image" />
                            <img src="images/screen1.jpg" alt="image" />
                        </div>

                    </div>

                </div>
                {/* <!-- // end .section --> */}





                <div className="section" id="pricing">
                    <div className="container">
                        <div className="section-title">
                            <small>PRICING</small>
                            <h3>Upgrade to Pro</h3>
                        </div>

                        <div className="card-deck">
                            <div className="card pricing">
                                <div className="card-head">
                                    <small className="text-primary">PERSONAL</small>
                                    <span className="price">$14<sub>/m</sub></span>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <div className="list-group-item">10 Projects</div>
                                    <div className="list-group-item">5 GB Storage</div>
                                    <div className="list-group-item">Basic Support</div>
                                    <div className="list-group-item"><del>Collaboration</del></div>
                                    <div className="list-group-item"><del>Reports and analytics</del></div>
                                </ul>
                                <div className="card-body">
                                    <Link to="#" className="btn btn-primary btn-lg btn-block">Choose this Plan</Link>
                                </div>
                            </div>
                            <div className="card pricing popular">
                                <div className="card-head">
                                    <small className="text-primary">FOR TEAMS</small>
                                    <span className="price">$29<sub>/m</sub></span>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <div className="list-group-item">Unlimited Projects</div>
                                    <div className="list-group-item">100 GB Storage</div>
                                    <div className="list-group-item">Priority Support</div>
                                    <div className="list-group-item">Collaboration</div>
                                    <div className="list-group-item">Reports and analytics</div>
                                </ul>
                                <div className="card-body">
                                    <Link to="#" className="btn btn-primary btn-lg btn-block">Choose this Plan</Link>
                                </div>
                            </div>
                            <div className="card pricing">
                                <div className="card-head">
                                    <small className="text-primary">ENTERPRISE</small>
                                    <span className="price">$249<sub>/m</sub></span>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <div className="list-group-item">Unlimited Projects</div>
                                    <div className="list-group-item">Unlimited Storage</div>
                                    <div className="list-group-item">Collaboration</div>
                                    <div className="list-group-item">Reports and analytics</div>
                                    <div className="list-group-item">Web hooks</div>
                                </ul>
                                <div className="card-body">
                                    <Link to="#" className="btn btn-primary btn-lg btn-block">Choose this Plan</Link>
                                </div>
                            </div>
                        </div>
                        {/*<!-- // end .pricing -->*/}


                    </div>

                </div>
                {/*<!-- // end .section -->*/}


                <div className="section pt-0">
                    <div className="container">
                        <div className="section-title">
                            <small>FAQ</small>
                            <h3>Frequently Asked Questions</h3>
                        </div>

                        <div className="row pt-4">
                            <div className="col-md-6">
                                <h4 className="mb-3">Can I try before I buy?</h4>
                                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>
                                <h4 className="mb-3">What payment methods do you accept?</h4>
                                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>

                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-3">Can I change my plan later?</h4>
                                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>
                                <h4 className="mb-3">Do you have a contract?</h4>
                                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>

                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- // end .section --> */}



                <div className="section bg-gradient">
                    <div className="container">
                        <div className="call-to-action">

                            <div className="box-icon"><span className="ti-mobile gradient-fill ti-3x"></span></div>
                            <h2>Download Anywhere</h2>
                            <p className="tagline">Available for all major mobile and desktop platforms. Rapidiously visualize optimal ROI rather than enterprise-wide methods of empowerment. </p>
                            <div className="my-4">

                                <Link to="#" className="btn btn-light"><img src="images/appleicon.png" alt="icon" /> App Store</Link>
                                <Link to="#" className="btn btn-light"><img src="images/playicon.png" alt="icon" /> Google play</Link>
                            </div>
                            <p className="text-primary"><small><i>*Works on iOS 10.0.5+, Android Kitkat and above. </i></small></p>
                        </div>
                    </div>

                </div>
                {/* <!-- // end .section --> */}

                <div className="light-bg py-5" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center text-lg-left">
                                <p className="mb-2"> <span className="ti-location-pin mr-2"></span> 1485 Pacific St, Brooklyn, NY 11216 USA</p>
                                <div className=" d-block d-sm-inline-block">
                                    <p className="mb-2">
                                        <span className="ti-email mr-2"></span> <Link className="mr-4" to="mailto:support@mobileapp.com">support@mobileapp.com</Link>
                                    </p>
                                </div>
                                <div className="d-block d-sm-inline-block">
                                    <p className="mb-0">
                                        <span className="ti-headphone-alt mr-2"></span> <Link to="tel:51836362800">518-3636-2800</Link>
                                    </p>
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className="social-icons">
                                    <Link to="#"><span className="ti-facebook"></span></Link>
                                    <Link to="#"><span className="ti-twitter-alt"></span></Link>
                                    <Link to="#"><span className="ti-instagram"></span></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/*end .section */}
                <footer className="my-5 text-center">
                    {/*<!-- Copyright removal is not prohibited! -->*/}
                    <p className="mb-2"><small>COPYRIGHT © 2017. ALL RIGHTS RESERVED. MOBAPP TEMPLATE BY <Link to="https://colorlib.com">COLORLIB</Link></small></p>

                    <small>
                        <Link to="#" className="m-2">PRESS</Link>
                        <Link to="#" className="m-2">TERMS</Link>
                        <Link to="#" className="m-2">PRIVACY</Link>
                    </small>
                </footer>


            </div >
        )
    }
}
