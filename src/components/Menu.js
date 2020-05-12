import React from "react";
import "./Menu.scss";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Link } from "react-router-dom";

class Menu extends React.Component {
    render() {
        return(
            <section id="navbar" className="navbar">
                <Link to="/">
                    <img src="../../miubic-recor.png" alt="Area de clientes"/>  
                </Link>

               <div>
               <div className="area-clientes">
                    <Link to="/login">
                        <p>Área Clientes</p>      
                    </Link>  
                </div>
                <div className="icon-clientes">
                    <Link to="/login">
                        <AccountCircleIcon/>       
                    </Link>
                </div>
               </div>
            </section>
        )
    }
}

export default Menu;