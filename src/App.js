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
      allMenu: [MockData.menu],
      cartItems: [],
      totalCost: 0,
      totalProjected: 0,
      currentUser: ""
    }
  }
  toggleAlert() {
    alert('toggle');
  }
  render() {
    return (
      <div className="App">
        {/* <div className="Login-container">
          <Login/>
        </div> */}
        <div className="Header-container">
          <Header/>
        </div>
        <div className="Inventory-container">
          <Inventory allProducts={this.state.allProducts}/>
        </div>
        <div className="Totals-container">
          <Totals allProducts={this.state.allProducts} 
                  allMenu={this.state.allMenu} />
        </div>
        <div className="Footer-container">
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
