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
    
    displayProds = () => {
        this.props.toggleCat(this.props.category)
    }


    render() {
        if (this.props.category === this.props.selectedCat) {
            return (
                <div className="liquorProd open" onClick={this.displayProds}>
                    <li className="Category">{this.props.category}</li>
                    <div className="Single-product header"><span>Product</span><span>Price</span><span>Quantity</span></div>
                    <InventoryProd allProducts={this.props.products} category={this.props.category} changeCart={this.props.changeCart} />
                </div>
            )
        } else {
            return (
                <div className="liquorProd closed" onClick={this.displayProds}>
                    <li className="Category">{this.props.category}</li>
                </div>
            )
        }
    }
}

export default InventoryCat;

                                