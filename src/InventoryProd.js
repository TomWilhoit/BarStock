import React from "react";
import CartItem from "./CartItem.js";
import "./css/InventoryProd.scss";

const InventoryProd = props => {
    return (
      <article className="Category-products">
        {props.allProducts
          .filter(function(inventory) {
            return inventory.category === props.category;
          })
          .map(function(product) {
            return (
              <CartItem
                className="CartItem"
                product={product}
                key={product.inventory_code}
                changeCart={props.changeCart}
                cartItems={props.cartItems}
              />
            );
          })}
      </article>
    );
  }


export default InventoryProd;
