import React, { Component } from 'react';
import App from './App.js';
import InventoryProd from './InventoryProd.js';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //props: props
        }
    }

    addProduct = event => {
        this.props.changeCart(this.props.el);
    }

    minusProduct = event => {
        console.log('minus ', event.target);
    }

    render() {
        return(
            <div className="Single-product" id={this.props.el.inventory_code}>
                <span>{this.props.el.product}</span>
                <span>${this.props.el.price}</span>
                <span>
                    <button onClick={this.minusProduct}><i className="fas fa-minus-square"></i></button>
                    <span> 0 </span> 
                    <button onClick={this.addProduct}><i className="fas fa-plus-square"></i></button>
                </span>
            </div>
        ) 

    }
}

export default CartItem;