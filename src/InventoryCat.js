import React, { Component } from "react";
import InventoryProd from "./InventoryProd.js";
import "./css/InventoryCat.scss";

class InventoryCat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayProds = () => {
    this.props.toggleCat(this.props.category);
  };

  render() {
    if (this.props.category === this.props.selectedCat) {
      return (
        <div className="liquorProd open" onClick={this.displayProds}>
          <li className="Category">
            <h2 className="Category-titles">{this.props.category}</h2>
          </li>
          <InventoryProd
            allProducts={this.props.products}
            category={this.props.category}
            changeCart={this.props.changeCart}
            cartItems={this.props.cartItems}
          />
        </div>
      );
    } else {
      return (
        <div className="liquorProd closed" onClick={this.displayProds}>
          <li className="Category">
            <h2 className="Category-titles">{this.props.category}</h2>
          </li>
        </div>
      );
    }
  }
}

export default InventoryCat;
