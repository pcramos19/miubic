import React from "react";
import "./Noticias.scss"
import Noticia from "./Noticia"


class Noticias extends React.Component {
    render(){
        return(
            <>
                <section id="noticias" className="noticias">
                    <h3>Noticias</h3>
                    <div>
                        <Noticia/>
                    </div>
                </section>
            </>
        )
    }
}

export default Noticias