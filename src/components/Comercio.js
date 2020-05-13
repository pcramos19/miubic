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
                        <p>Son los que menos soluciones digitales han implantado. La falta de recursos económicos, conocimientos técnicos o tiempo son las barreras más comunes que impiden la digitalización.</p>
                        <p>Sin embargo la digitalización de las empresas es fundamental para su desarrollo y crecimiento.</p>
                    </div>

                    <div className="proyects-solution">
                        <img src="../../solucion.png" alt="Miubic"/>
                    </div>

                </div>

                <div className="proyects-wrapper-comercio">
                    <video src="../../VID-20190326-WA0009.mp4" width="50%" height="50%" autoPlay muted controls></video>
                    <div className="ventajas-comercio">
                        <h3>Ventajas para los comercios</h3>
                        <p>Con Miubic, por tan sólo <span>9'95€/mes</span> el comercio adquiere visibilidad plena desde cualquier lugar y dispositivo. Con una plataforma digital diseñada con un panel intuitivo y de fácil uso, obtendrás una comunicación directa con tus clientes.</p>
                        <p>Tendrás una autogestión de todas tus ofertas, con una validación de las mismas de manera sencilla con el escaneo de códigos QR.</p>
                        <p>Además dispones de videos tutoriales en nuestro <a href="https://www.youtube.com/channel/UCe5TSUB_ff9Oh8puuSNVEcQ">canal de Youtube</a> sobre el funcionamiento de la plataforma.</p>
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
                        <p>Con esta aplicación de sencillo uso podrás conocer todos los comercios y las mejores ofertas en un radio de kilómtetros desde tu localización.</p>
                        <p>Recibirás notificaciones de manera instantanea todos los descuentos y promociones cerca de ti. Podrás beneficiarte de una tarjeta de puntos en cada comercio.</p>
                        <p>Con el uso de Miubic ayudas a la digitalización del pequeño comercio del barrio. Disponible en cualquier dispositivo.</p>
                    </div>
                    <video src="../../miubic-usuarios (1).mp4" width="50%" height="50%" autoPlay muted controls></video>
                </div>

            </section>
        )
    }
}

export default Comercio;