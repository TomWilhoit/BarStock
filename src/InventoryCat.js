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
        const bigDiv = {
            height: '37px',
        };

        const smallDiv = {
            height: '100%',
        };

        if (this.props.category === this.props.toggleState) {
        return (
            <div className="liquorProd" onClick={this.toggleProd} style={smallDiv}>
                <li>{this.props.category}</li>
                <InventoryProd allProducts={this.props.products} productType={this.props.category} />
            </div>
        )
        } else{
            return (
                <div className="liquorProd" onClick={this.toggleProd} style={bigDiv}>
                    <li>{this.props.category}</li>
                </div>
            )
        }
    }
}

export default InventoryCat;
