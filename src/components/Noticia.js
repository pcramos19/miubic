import React from "react";
import "./Noticia.scss"



class Noticia extends React.Component {
    render(){
        return(
            <>
                <section id="noticia" className="noticia">
                    <img src={this.props.noticia.img} alt={this.props.noticia.title}/>

                    <div className="container-text">
                        
                        <div className="titulo">
                            <h5>{this.props.noticia.title}</h5>
                            <hr></hr>
                        </div>

                        <p><span>{this.props.noticia.medio} |</span> {this.props.noticia.descripcion}</p>
                    </div>
                    <a href={this.props.noticia.url} target="_blank" rel="noopener noreferrer"><button>Leer más</button></a> 
                </section>
            </>
        )
    }
}

export default Noticia