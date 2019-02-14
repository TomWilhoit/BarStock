import React, { Component } from 'react';
import App from './App.js';
import Inventory from './Inventory.js';
import InventoryCats from './InventoryCats.js';
import './css/InventoryProds.css';


class InventoryProds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // newProps: props
        }
    }
    
    
    render() {
        // console.log(this.state.newProps)
        //IS THIS THE RIGHT WAY TO BIND??
        let boundProps = this.props;
        return (
            <div>
             {
                 boundProps.allProducts.filter(function (inventory) { 
                    return inventory.category === boundProps.productType;
                  }).map(function (el) {  
                    return <p key={el.inventory_code}>{el.product}</p>
                  })

            }
            </div>
        )
    }
}

export default InventoryProds;
