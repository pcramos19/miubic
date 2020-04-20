import React from "react";
import "./Contacto.scss";


class Contacto extends React.Component {
    render() {
        return(
            <section id="contact" className="contact">
            <div className="contact-background">   
                <h3>Contacto</h3> 
                <h4>¿Te gustaría contactar conmigo?</h4>
                <div className="contact-container">
                        <div className="contact-wrapper">
                        <a href="https://www.google.com/maps/place/Calle+de+Ercilla,+2-16,+28005+Madrid/@40.4038272,-3.7057899,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0xd422632aff4b05f:0xb74c011e22a7863e!2sCalle+de+Ercilla,+Madrid!3b1!8m2!3d40.4020278!4d-3.702223!3m4!1s0xd4227d2b8365981:0xa5d757231c6056fd!8m2!3d40.4038254!4d-3.703605" target="_blank" rel="noopener noreferrer">Hola</a>
                            <h6>Localización</h6>
                            <p>C/ Ercilla, 28005 - Madrid</p>
                        </div>
                        <div className="contact-wrapper">
                            <a href="mailto: pedro.castaneda.ramos@gmail.com" target="_blank" rel="noopener noreferrer">Hola</a>
                            <h6>Email</h6>
                            <p>pedro.castaneda.ramos@gmail.com</p>
                        </div>
                        <div className="contact-wrapper">
                        <a href="#!">Hol</a>
                            <h6>Teléfono</h6>
                            <p>+34 691 506 711</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacto;