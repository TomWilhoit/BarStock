import React, { Component } from 'react';
import MockData from './mockData.js';
import App from './App.js';
import './css/Header.scss';

import BarLogo from './BarStock_Logo.png'

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img src={BarLogo} alt="Bar Stock"/>
      </div>
    </div>
  );
};









export default Header;