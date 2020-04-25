import React from "react";
import "./Comercio.scss";

import CardTravelIcon from '@material-ui/icons/CardTravel';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import InsertCommentIcon from '@material-ui/icons/InsertComment';


class Comercio extends React.Component {

    
    render() {

        return(
            <section id="proyects" className="proyects">
                <h2>Comercios</h2>
                <div className="proyects-contain">

                    <div className="proyects-solution">
                        <img src="../../solucion.png" alt="Miubic"/>
                    </div>

                    <div className="proyects-text">
                        <p>La mayoría de los pequeños negocios están aún sin digitalizar. Web estáticas, sin visibilidad en Redes Sociales, y por tanto, sin comunicación con sus clientes a tiempo real.</p>
                        <p>Son los que menos soluciones digitales han implantado. “La falta de recursos económicos, conocimientos técnicos o tiempo son las barreras más comunes que impiden la digitalización”</p>
                        <p>Sin embargo la digitalización de las empresas es fundamental para su desarrollo y crecimiento.</p>
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
                        <h3>Ventajas para los comercios</h3>
                        <p>Panel intuitivo y fácil.</p>
                        <p>Autogestión de ofertas.</p>
                        <p>Comunicación directa con tus clientes.</p>
                        <p>Códigos MiUbic para los clientes.</p>
                        <p>Escaner de código QR para la validación.</p>
                    </div>
                    <video src="../../miubic-usuarios (1).mp4" width="50%" height="50%" controls></video>
                </div>

            </section>
        )
    }
}

export default Comercio;