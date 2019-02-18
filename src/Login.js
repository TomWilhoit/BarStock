import React, { Component } from 'react';
import MockData from './mockData.js';
import App from './App.js';
import BarLogo from './BarStock_Logo.png'
import './css/Login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameValue : "",
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.toggleLogin();
    let userName = document.getElementById("userNameID").value;
    console.log(userName)
    this.setState({userNameValue : userName });
  }

  render() {
    return (
      <div className="Login-container"> 
        <form className="Login">
          <img className="bar-logo" src={BarLogo} alt="Bar Stock"/>
          <p className="login-quote">Making inventory easy for bars, both big and small.</p>
          <div className="login-form">
            <input id="userNameID" className="username-input" type="text" placeholder="Username"></input>
            <input className="password-input" type="password" placeholder="Password"></input>
            <button className="login-button" onClick={this.handleClick}>Let's get started!</button>
          </div>
        </form>
      </div> 
    )
  } 
}






export default Login;