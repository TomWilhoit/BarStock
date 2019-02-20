import React, { Component } from "react";
import BarLogo from "./BarStock_Logo.png";
import "./css/Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameValue: "",
      passwordValue: ""
    };
  }

  handleEvent = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.props.loginAccount(this.state.userNameValue);
  };

  handleClick = e => {
    e.preventDefault();
    if (
      this.state.userNameValue.length > 0 &&
      this.state.passwordValue.length > 0
    ) {
      this.props.toggleLogin();
    } else {
      alert("Please enter a valid Username and Password");
    }
  };

  render() {
    return (
      <div className="Login-container">
        <form className="Login">
          <img className="bar-logo" src={BarLogo} alt="Bar Stock" />
          <p className="login-quote">
            Making inventory easy for bars, both big and small.
          </p>
          <div className="login-form">
            <input
              id="userNameID"
              className="username-input"
              type="text"
              value={this.state.userNameValue}
              placeholder="Username"
              onChange={this.handleEvent}
              name="userNameValue"
            />
            <input
              className="password-input"
              type="password"
              value={this.state.passwordValue}
              name="passwordValue"
              placeholder="Password"
              onChange={this.handleEvent}
            />
            <button className="login-button" onClick={this.handleClick}>
              Let's get started!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
