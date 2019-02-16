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
        this.props.changeCart(this.props.product, "minusOne");
        const decreaseQuantity = {
            quantity: this.state.quantity - 1
        }
        this.setState(decreaseQuantity)
    }

    render() {
        return(
            <div className="Single-product" id={this.props.product.inventory_code}>
                <span>{this.props.product.product}</span>
                <span>${this.props.product.price}</span>
                <span>
                    <button onClick={this.minusProduct}><i className="fas fa-minus-square"></i></button>
                    <span> {this.state.quantity} </span> 
                    <button onClick={this.addProduct}><i className="fas fa-plus-square"></i></button>
                </span>
            </div>
        ) 

    }
}

export default CartItem;