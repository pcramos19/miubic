import React from "react";
import "./About.scss";
import FlareIcon from '@material-ui/icons/Flare';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import PlaceIcon from '@material-ui/icons/Place';


class About extends React.Component {
    render() {
        return(
            <section id="about" className="about">

                <div className="about-txt">
                    <h3>¿Qué es Miubic?</h3>
                    <p>"Plataforma digital que agrupa comercios por proximidad, donde encontrarás las mejores ofertas en cada uno de ellos."</p>           
                </div>

                <div className="about-wrapper">

                    <div className="about-circulo">
                        <div className="about-icons"> 
                            <FlareIcon/>
                        </div>
                        <h5>Intuitiva</h5>
                    </div>

                    <div className="about-circulo">
                        <div className="about-icons"> 
                            <EuroSymbolIcon/>
                        </div>
                        <h5>Económica</h5>
                    </div>

                    <div className="about-circulo">
                        <div className="about-icons"> 
                            <PlaceIcon/>
                        </div>
                        <h5>Geolocalizable</h5>
                    </div>

                </div>
 
            </section>
        )
    }
}

export default About;