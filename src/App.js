import React, { Component } from 'react';
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
      allDistributors: [],
      allInventory: [], 
      allMenu: [],
      cartItems: [{
        "product": "Fireball",
        "inventory_code": 10001,
        "type": "liquor",
        "category": "whiskey",
        "price": 18.78,
        "size": 33.8,
        "unit": "ounces"
      },
      {
        "product": "Jim Beam",
        "inventory_code": 10002,
        "type": "liquor",
        "category": "whiskey",
        "price": 16.99,
        "size": 25.3,
        "unit": "ounces"
      },
      {
        "product": "Jack Daniels",
        "inventory_code": 10003,
        "type": "liquor",
        "category": "whiskey",
        "price": 28.80,
        "size": 33.8,
        "unit": "ounces"
      }],
      cartMenu: [{
        "product": "Fireball",
        "inventory_code": 10001,
        "price_per_drink": 3,
        "serving_size": 1.5,
        "unit": "ounces",
        "tier": "mid"
      },
      {
        "product": "Jim Beam",
        "inventory_code": 10002,
        "price_per_drink": 5,
        "serving_size": 1.5,
        "unit": "ounces",
        "tier": "mid"
      },
      {
        "product": "Jack Daniels",
        "inventory_code": 10003,
        "price_per_drink": 6,
        "serving_size": 1.5,
        "unit": "ounces",
        "tier": "mid"
      }],
      totalCost: 0,
      totalProjected: 0,
      currentUser: ""
    }
  }

  componentDidMount() {
    fetch("http://whateverly-datasets.herokuapp.com/api/v1/distributor")
      .then(response=> response.json())
      .then(supplier => {
        this.setState({
          allInventory: supplier.distributor[0].inventory,
          allDistributors: supplier.distributor[0]
        });
      })
      .catch(error => {
        throw new Error(error);
      });

    fetch("http://whateverly-datasets.herokuapp.com/api/v1/menu")
      .then(response => response.json())
      .then(products => {
        this.setState({
          allMenu: products.menu
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  }


  toggleAlert() {
    alert('toggle');
  }

  render() {
    // console.log('allProducts ', this.state.allProducts.inventory)
    return (
      <div className="App">
        {/* <div className="Login-container">
          <Login/>
        </div> */}
        <div className="Header-container">
          <Header/>
        </div>
        <div className="Inventory-container">
          <Inventory allInventory={this.state.allInventory}/>
        </div>
        <div className="Totals-container">
          <Totals cartMenu={this.state.cartMenu}
                  cartItems={this.state.cartItems}
                  />
        </div>
        <div className="Footer-container">
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
