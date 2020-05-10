import React from "react";
import "./Noticias.scss"
import Noticia from "./Noticia"
import noticias from "../noticias.json";

class Noticias extends React.Component {
    state = {
        noticias: noticias
    }

    render(){

        const { noticias } = this.state;

        return(
            <>
                <section id="noticias" className="noticias">
                    <h3>Noticias</h3>
                    <div className="noticias-wrapper"> 
                        {noticias.map((noticia) => {
                            return (
                                <Noticia
                                    key={noticia.id} 
                                    noticia={noticia} 
                                />
                        )
                    })}
                    </div>
                </section>
            </>
        )
    }
}

export default Noticias