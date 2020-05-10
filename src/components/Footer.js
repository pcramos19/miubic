import React from "react";
import "./Footer.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

class Footer extends React.Component {
    render() {
        return(
            <section id="footer" className="footer">
                <div className="icons">
                    <a href="https://www.youtube.com/channel/UCe5TSUB_ff9Oh8puuSNVEcQ" target="_blank" rel="noopener noreferrer"><YouTubeIcon/></a>
                    <a href="https://www.facebook.com/Miubic/" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
                    <a href="https://www.instagram.com/miubic/?hl=es" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
                </div>
                <div className="terms">
                    <p>Términos de uso | Política de privacidad | Política de cookies</p>
                    {/* <p></p> */}
                </div>
                <p> ©2020 Copyright Miubic. Todos los derechos reservados.</p>               
            </section>
        )
    }
}

export default Footer;