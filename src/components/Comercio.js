import React from "react";
import "./Comercio.scss";

import CardTravelIcon from '@material-ui/icons/CardTravel';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import InsertCommentIcon from '@material-ui/icons/InsertComment';


class Comercio extends React.Component {

    
    render() {

        return(
            <section id="proyects" className="proyects">
                <div className="proyects-contain">
                    <div className="proyects-text">
                    <h3>Digitalización de comercios</h3>
                        <p>La mayoría de los pequeños negocios están aún sin digitalizar. Web estáticas, sin visibilidad en Redes Sociales, y por tanto, sin comunicación con sus clientes a tiempo real.</p>
                        <p>Son los que menos soluciones digitales han implantado. “La falta de recursos económicos, conocimientos técnicos o tiempo son las barreras más comunes que impiden la digitalización”.</p>
                        <p>Sin embargo la digitalización de las empresas es fundamental para su desarrollo y crecimiento.</p>
                    </div>

                    <div className="proyects-solution">
                        <img src="../../solucion.png" alt="Miubic"/>
                    </div>

                </div>

                <div className="proyects-wrapper">
                    <video src="../../miubic-usuarios (1).mp4" width="50%" height="50%" autoPlay muted controls></video>
                    <div className="ventajas">
                    <h3>Ventajas para los comercios</h3>
                        <ul>
                            <li>Panel intuitivo y fácil.</li>
                            <li>Autogestión de ofertas.</li>
                            <li>Visibilidad de tu comercio desde cualquier lugar.</li>
                            <li>Comunicación directa con tus clientes.</li>
                            <li>Códigos MiUbic para los clientes.</li>
                            <li>Escaner de código QR para la validación.</li>
                        </ul>
                    </div>
                </div>

                <div className="proyects-capta">
                    <div className="capta-circulo"> 
                        <CardTravelIcon/>
                        <h5>Captación clientes geolocalizados</h5>
                    </div>

                    <div className="capta-circulo"> 
                        <AccountBalanceIcon/>
                        <h5>Fidelización de tus clientes</h5>
                    </div>

                    <div className="capta-circulo"> 
                        <InsertCommentIcon/>
                        <h5>Valoraciones de  clientes</h5>
                    </div>

                </div>

                <div className="proyects-wrapper">
                    <div className="ventajas">
                    <h3>Ventajas para los usuarios</h3>
                        <ul>
                            <li>Fácil de usar.</li>
                            <li>Descubrir todos los comercios de la zona.</li>
                            <li>Información instantanea de promociones y descuentos.</li>
                            <li>Beneficio de tarjeta de puntos en comercios.</li>
                            <li>Ayuda a la digitalización de los comercios del barrio.</li>
                            <li>Disponible en cualquier plataforma.</li>
                        </ul>
                    </div>
                    <video src="../../miubic-usuarios (1).mp4" width="50%" height="50%" autoPlay muted controls></video>
                </div>

            </section>
        )
    }
}

export default Comercio;