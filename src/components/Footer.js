import React from "react";
import "./Footer.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

class Footer extends React.Component {
    render() {
        return(
            <section id="footer" className="footer">
                <div className="icons">
                    <a href="https://www.youtube.com/channel/UCe5TSUB_ff9Oh8puuSNVEcQ" target="_blank" rel="noopener noreferrer"><YouTubeIcon/></a>
                    <a href="https://www.facebook.com/Miubic/" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
                    <a href="https://twitter.com/hashtag/miubic?src=hashtag_click" target="_blank" rel="noopener noreferrer"><TwitterIcon/></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
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