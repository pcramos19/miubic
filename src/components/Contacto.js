import React from "react";
import "./Contacto.scss";

import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


class Contacto extends React.Component {
    render() {
        return(
            <section id="contact" className="contact">
            <div className="contact-background">   
                <h3>Contacto</h3> 
                <h4>¿Te gustaría obtener más información?</h4>
                <h5>Ponte en contacto a través de nuestros diferentes canales de contacto</h5>
                <div className="contact-container">
                        <div className="contact-wrapper">
                            <a href="mailto: Hola@miubic.com" target="_blank" rel="noopener noreferrer"><EmailIcon/></a>
                            <p>Hola@miubic.com</p>
                        </div>
                        <div className="contact-wrapper">
                        <a href="https://wa.me/34633521297?text=Hola" target="_blank" rel="noopener noreferrer"><WhatsAppIcon/></a>
                            <p>+34 633 521 297</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacto;