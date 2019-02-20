import React from "react";
import "./css/Header.scss";

import BarLogo from "./BarStock_Logo.png";

const Header = props => {
  return (
    <div className="Header">
      <div className="welcome-message">Welcome: {props.currentUser}</div>
      <div className="logo-container">
        <img src={BarLogo} alt="Bar Stock" />
      </div>
      <div className="welcome-message">Account# 1811FE</div>
    </div>
  );
};

export default Header;
