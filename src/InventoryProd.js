import React, { Component } from 'react';
import App from './App.js';
import Inventory from './Inventory.js';
import InventoryCats from './InventoryCat.js';
import './css/InventoryProd.css';


class InventoryProd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // newProps: props
        }
        this.addProduct = this.addProduct.bind(this);
        this.minusProduct = this.minusProduct.bind(this);
    }

    addProduct = () => {
        console.log('adding ');
    }

    minusProduct = event => {
        console.log('minus ');
    }
    
    render() {
        // console.log(this.state.newProps)
        //IS THIS THE RIGHT WAY TO BIND??
        let boundProps = this.props;
        return (
            <div className="Category-products">
            {
                boundProps.allProducts.filter(function (inventory) { 
                    return inventory.category === boundProps.productType;
                }).map(function (el) {  
                    return  <div className="Single-product" key={el.inventory_code}>
                                <span>{el.product}</span>
                                <span>${el.price}</span>
                                <span>
                                    <button><i className="fas fa-minus-square"></i></button>
                                    <span> 0 </span> 
                                    <button><i className="fas fa-plus-square"></i></button>
                                </span>
                            </div>
                })
            }
            </div>
        )
    }
}

export default InventoryProd;