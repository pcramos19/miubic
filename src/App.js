import React, { Component } from 'react';
import './App.css';
import Menu from "./components/Menu";
import Main from "./components/Main";
import About from "./components/About";
import Noticias from "./components/Noticias";
import Comercio from "./components/Comercio";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";

import { Switch, Route } from "react-router-dom";


class App extends Component {

  render(){
      return (     
        <div>
          <Switch>
            <Route exact path="/" render={() => { return (
              <> 
                <Menu/>
                <Main/>
                <About/>
                <Comercio/>
                <Noticias/>
                <Contacto/>
                <Footer/>
              </>          
            )}}
            />
            <Route exact path="/login" render={() => <Login/>} />
          </Switch>
        </div>
      )
  }
}

export default App;
