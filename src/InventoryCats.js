import React, { Component } from 'react';
import App from './App.js';
import Inventory from './Inventory.js';
import InventoryProds from './InventoryProds.js'
import './css/InventoryCats.css';


class InventoryCats extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <li>{this.props.types}</li>
                <InventoryProds allProducts={this.props.products} productType={this.props.types} />
            </div>
        )
    }
}

export default InventoryCats;
