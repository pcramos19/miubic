import React from "react";
import "./Menu.scss";
import PersonIcon from '@material-ui/icons/Person';

import { Link } from "react-router-dom";

class Menu extends React.Component {
    render() {
        return(
            <section id="navbar" className="navbar">
                <Link to="/">
                    <img src="../../logo Miubic.png" alt="Area de clientes"/>  
                </Link>

                <div className="area-clientes">
                    <Link to="/login">
                        <p>Area Clientes</p>      
                    </Link>  
                </div>
                <div className="icon-clientes">
                    <Link to="/login">
                        <PersonIcon/>       
                    </Link>
                </div>
            </section>
        )
    }
}

export default Menu;