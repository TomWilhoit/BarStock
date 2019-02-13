import React, { Component } from 'react';
import MockData from './mockData.js'
import './css/App.css';
import Inventory from './Inventory.js';
import Totals from './Totals.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Login from './Login.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: [MockData.distributor[0].inventory], 
      allMenu: [MockData.menu]
    }
  }
  toggleAlert() {
    alert('toggle');
  }
  render() {
    console.log(this.state.allMenu)
    return (
      <div className="App">
        <div className="Login-container">
          <Login/>
        </div>
        <div className="Header-container">
          <Header/>
        </div>
        <div className="Inventory-container">
          <Inventory/>
        </div>
        <div className="Totals-container">
          <Totals/>
        </div>
        <div className="Footer-container">
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
