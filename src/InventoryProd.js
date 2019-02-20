import React, { Component } from "react";
import CartItem from "./CartItem.js";
import "./css/InventoryProd.scss";

class InventoryProd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let boundProps = this.props;
    return (
      <article className="Category-products">
        {boundProps.allProducts
          .filter(function(inventory) {
            return inventory.category === boundProps.category;
          })
          .map(function(product) {
            return (
              <CartItem
                className="CartItem"
                product={product}
                key={product.inventory_code}
                changeCart={boundProps.changeCart}
                cartItems={boundProps.cartItems}
              />
            );
          })}
      </article>
    );
  }
}

export default InventoryProd;
