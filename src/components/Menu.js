import React from "react";
import "./Menu.scss";

class Menu extends React.Component {
    render() {
        return(
            <section id="navbar" className="navbar">
                <img src="../../logo Miubic.png" alt="Area de clientes"/>  
                <div className="area-clientes">
                <p>Area Clientes</p>
                <img src="../../logo Miubic.png" alt="Area de clientes"/>       
                </div>
            </section>
        )
    }
}

export default Menu;