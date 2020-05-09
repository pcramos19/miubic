import React from "react";
import "./Noticia.scss"



class Noticia extends React.Component {
    render(){
        return(
            <>
                <section id="noticia" className="noticia">
                    <img src="../../micheile-henderson-fEykiYD9Vk0-unsplash.jpg" alt=""/>
                    <div className="container-text">
                        <h5>¡Nuevas funcionalidades!</h5>
                        <p>En nuestra búsqueda de ser la ayuda que necesitas hemos desarrollado nuevas funcionalidades para que, ya seas comercio o usuario podamos cubrir tus necesidades y estar a tu lado en cualquier momento.</p>
                    </div>
                </section>
            </>
        )
    }
}

export default Noticia