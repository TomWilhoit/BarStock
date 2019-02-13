import React, { Component } from 'react';
import App from './App.js';
import Inventory from './Inventory.js';
import './css/InventoryTypes.css';


class InventoryTypes extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <li>{this.props.types} change</li>
        )
    }

}

export default InventoryTypes;
