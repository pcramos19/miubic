import React, { Component } from 'react';
import './App.css';
// import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import VideoComercio from "./components/VideoComercio";
import Proyects from "./components/Proyects";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";


class App extends Component {

  render(){
      return (     
        <div>
          {/* <Nav/> */}
          <Main/>
          <About/>
          <Proyects/>
          <VideoComercio/>
          <Contacto/>
          <Footer/>
        </div>
      )
  }
}

export default App;
