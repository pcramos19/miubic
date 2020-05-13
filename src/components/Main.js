import React from "react";
import "./Main.scss";


class Main extends React.Component {
    
    render() {
        return(
            <section className="main">
                <div className="main-wrapper">
                    <img className="logo" src="../../miubic-recor.png" alt="Miubic"/>
                    <div className="download">
                        <a href="https://play.google.com/store/apps/details?id=com.miubic.miubic&hl=es_419" target="_blank" rel="noopener noreferrer"><img className="gplay-app" src="../../googleplay.png" alt="Google Play"/></a>
                        <a href="https://apps.apple.com/es/app/miubic/id1455021306" target="_blank" rel="noopener noreferrer"><img className="gplay-app" src="../../appstore.png" alt="App store"/></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Main;