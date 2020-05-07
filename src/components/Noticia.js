import React from "react";
import "./Noticia.scss"



class Noticia extends React.Component {
    render(){
        return(
            <>
                <section id="noticia" className="noticia">
                    <h5>Título</h5>
                    <p>Descripcion</p>
                </section>
            </>
        )
    }
}

export default Noticia