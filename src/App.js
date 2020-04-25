import React, { Component } from 'react';
import './App.css';
// import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Noticias from "./components/Noticias";
import Comercio from "./components/Comercio";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";


class App extends Component {

  render(){
      return (     
        <div>
          {/* <Nav/> */}
          <Main/>
          <About/>
          <Comercio/>
          <Noticias/>
          <Contacto/>
          <Footer/>
        </div>
      )
  }
}

export default App;
