import React, { Component } from 'react';
import App from './App.js';
import Inventory from './Inventory.js';
import InventoryCats from './InventoryCat.js';
import CartItem from './CartItem.js';
import './css/InventoryProd.css';


class InventoryProd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // newProps: props
        }
        // this.addProduct = this.addProduct.bind(this);
        // this.minusProduct = this.minusProduct.bind(this);

    }
    
    render() {
        // console.log(this.state.newProps)
        //IS THIS THE RIGHT WAY TO BIND??
        let boundProps = this.props;
        return (
            <div className="Category-products">
            {
                boundProps.allProducts.filter(function (inventory) { 
                    return inventory.category === boundProps.category;
                }).map(function (product) {  
                    return <CartItem product={product} key={product.inventory_code} className="CartItem" changeCart={boundProps.changeCart} />;  
                })
            }
            </div>
        )
    }
}

export default InventoryProd;