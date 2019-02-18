import React, { Component } from 'react';
import App from './App.js';
import InventoryProd from './InventoryProd.js';


class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
    }

    addProduct = event => {
        this.props.changeCart(this.props.product, "plusOne");
        const increaseQuantity = {
            quantity: this.state.quantity + 1
        }
        this.setState(increaseQuantity)
    }

    minusProduct = event => {
        if (this.state.quantity > 0) {
        this.props.changeCart(this.props.product, "minusOne");
        const decreaseQuantity = {
            quantity: this.state.quantity - 1
        }
        this.setState(decreaseQuantity)
        }
    }

    render() {

        let productName = this.props.product.inventory_code

        return(

            <section className="Single-product" id={this.props.product.inventory_code}>
                <div className="product-img">
                  <img src={require(`./images/${productName}.png`)} />
                </div>
                <div className="product-info">
                  <h4>{this.props.product.product}</h4>
                  <h5>Price Per: <span>${this.props.product.price.toFixed(2)}</span></h5>
                </div>
                <div className="product-quantity">
                  <section className="quantity-amount">
                    <button onClick={this.minusProduct}>
                      <i className="fas fa-minus"></i>
                    </button>
                    <div className="amount">{this.state.quantity}</div>
                    <button onClick={this.addProduct}>
                      <i className="fas fa-plus"></i>
                    </button>
                  </section>
                  <section className="quantity-label"><p>Current Quantity</p></section>
                </div>
            </section>
        )

    }
}

export default CartItem;
