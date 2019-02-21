import React, { Component } from "react";
import "./css/Totals.scss";

class Totals extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayCart = () => {
    return this.props.cartItems.map((item, index) => {
      return (
        <section className="cart-products" key={index}>
          <div className="item-product">
            <h5>{item.product}</h5>
          </div>
          <div className="item-quantity">
            <h5>
              {item.size} {item.unit}
            </h5>
          </div>
          <div className="item-price">
            <h5>${item.price.toFixed(2)}</h5>
          </div>
          <div className="item-delete">
            <button onClick={() => this.props.changeCart(item)}>
              <i className="fas fa-times" />
            </button>
          </div>
        </section>
      );
    });
  };

  totalCost = () => {
    return this.props.cartItems.reduce((acc, distObj) => {
      return (acc += distObj.price);
    }, 0);
  };

  totalProfit = () => {
    return this.props.cartItems.reduce((acc, distObj) => {
      let menuObj = this.props.cartMenu.find(menuObj => {
        return menuObj.inventory_code === distObj.inventory_code;
      });
      let distProdServSize = distObj.size;
      let menuProdServSize = menuObj.serving_size;
      let menuPrice = menuObj.price_per_drink;
      let distCost = distObj.price;
      return (acc +=
        (distProdServSize / menuProdServSize) * menuPrice - distCost);
    }, 0);
  };

  render() {
    return (
      <article className="Totals">
        <div className="total-label">
          <h3>Current Order</h3>
        </div>
        <section className="cart-display">{this.displayCart()}</section>
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
}

export default Totals;
