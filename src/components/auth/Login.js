import React, { Component } from 'react';
import AuthService from './AuthService'
import "./Login.scss";

import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        }, ()=>{
          this.props.getUser(this.state)
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return (
    <div className="login-box">
      <div className="login">
        <Link to="/">
          <img src="../../../Miubic-recor.png" alt="Miubic"/>
        </Link>
        <div className="form">
          <h2>Área de Clientes</h2> 
          <form onSubmit={this.handleFormSubmit}>
            <input type="text" name="username" placeholder="Usuario" value={this.state.username} onChange={e => this.handleChange(e)} required/>
            <input type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={e => this.handleChange(e)} required/>
            <h5>{this.state.error ? 'Usuario o contraseña incorrecta' : ''}</h5>
            <input type="submit" value="Iniciar sesión" />
          </form>
        </div>
      </div>
    </div>
    )
  }
}

export default Login;