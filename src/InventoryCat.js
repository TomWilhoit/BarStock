import React, { Component } from 'react';
import App from './App.js';
import Inventory from './Inventory.js';
import InventoryProd from './InventoryProd.js'
import './css/InventoryCat.css';


class InventoryCat extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    
    toggleProd = () => {
        this.props.toggle(this.props.category)
    }


    render() {
        if (this.props.category === this.props.toggleState) {
            return (
                <div className="liquorProd open" onClick={this.toggleProd}>
                    <li className="Category">{this.props.category}</li>
                    <div className="Single-product header"><span>Product</span><span>Price</span><span>Quantity</span></div>
                    <InventoryProd allProducts={this.props.products} productType={this.props.category} />
                </div>
            )
        } else {
            return (
                <div className="liquorProd closed" onClick={this.toggleProd}>
                    <li className="Category">{this.props.category}</li>
                </div>
            )
        }
    }
}

export default InventoryCat;

                                