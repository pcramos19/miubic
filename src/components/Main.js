import React from "react";
import "./Main.scss";


class Main extends React.Component {
    
    render() {
        return(
            <section className="main">
                <div className="main-wrapper">
                    <img className="logo" src="../../logo Miubic.png" alt="Miubic"/>
                    <div className="download">
                        <img className="gplay-app" src="../../googleplay.png" alt="Google Play"/>
                        <img className="gplay-app" src="../../appstore.png" alt="App store"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Main;