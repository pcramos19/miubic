import React from "react";
import "./Noticias.scss"
import Noticia from "./Noticia"
import Noticia2 from "./Noticia2"

class Noticias extends React.Component {
    render(){
        return(
            <>
                <section id="noticias" className="noticias">
                    <h3>Noticias</h3>
                    <div className="noticias-wrapper"> 
                        <Noticia/>
                        <Noticia2/>
                        <Noticia/>
                        <Noticia/>
                        <Noticia/>
                        <Noticia/>
                    </div>
                </section>
            </>
        )
    }
}

export default Noticias