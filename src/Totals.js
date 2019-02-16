import React, { Component } from 'react';
import MockData from './mockData.js';
import App from './App.js';
import Inventory from './Inventory';
import './css/Totals.css';

class Totals extends Component {
  constructor(props) {
    super(props);
    this.state ={
      // cartObjs: props.cartItems, 
      // cartNew: props.cartMenu
    }
  }

  totalCost = () => {
    return this.props.cartItems.reduce((acc, currObj) => {
      return acc += currObj.price; 
    }, 0)
  }

  totalProfit = () => {
    return this.props.cartItems.reduce((acc, currObj) => {
        let menuObj = this.props.cartMenu.find(item => {
          return item.inventory_code === currObj.inventory_code;
        });

        let dSize = currObj.size; // Distributor Product Serving Size
        let mSize = menuObj.serving_size; // Menu Product Serving Size
        let mPrice = menuObj.price_per_drink; // Menu Product Price Per Drink
        let dCost = currObj.price; // Distributor Product Cost
        return acc += (((dSize/mSize) * mPrice) - dCost); 

    }, 0)
  }

  render() {
    return (
      <div className="Totals">
        <section>
          <h3>Total Cost</h3>
          <h2>${this.totalCost()}</h2>
        </section>
        <section>
          <h3>Potential Profits</h3>

          <h2>${this.totalProfit().toFixed(2)}</h2>

        </section>
      </div>
    );
  }
};

export default Totals;