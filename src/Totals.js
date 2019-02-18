import React, { Component } from 'react';
import MockData from './mockData.js';
import App from './App.js';
import Inventory from './Inventory';
import './css/Totals.css';

class Totals extends Component {
  constructor(props) {
    super(props);
    this.state ={
    }
  }

  displayCart = () => {
    return this.props.cartItems.map(item => {
      return <section className="cart-products" key={item.inventory_code}>
        <div className="item-product"><h5>1 X {item.product}</h5></div>
        <div className="item-price"><h5>@ ${item.price.toFixed(2)}</h5></div>
        <div className="item-delete">
          <button onClick={this.props.changeCart}>
            <i className="fas fa-times" ></i>
          </button>
        </div>
      </section>
    })
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
      <article className="Totals">
        <div className="total-label">
          <h3>Current Order</h3>
        </div>
        <section className="cart-display">
          {this.displayCart()}
        </section>
        <div className="cost-container">
          <section className="returns-cost">
            <h2>Potential Returns*</h2>
            <h3>${this.totalProfit().toFixed(2)}</h3>
          </section>
          <section className="total-cost">
            <h2>Total Cost</h2>
            <h3>${this.totalCost().toFixed(2)}</h3>
          </section>
        </div>
      </article>
    );
  }
};

export default Totals;
