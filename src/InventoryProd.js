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

        }
    }

    render() {
        //IS THIS THE RIGHT WAY TO BIND??
        let boundProps = this.props;
        return (
            <article className="Category-products">
            {
                boundProps.allProducts.filter(function (inventory) {
                    return inventory.category === boundProps.category;
                }).map(function (product) {
                    return <CartItem className="CartItem"
                                    product={product}
                                    key={product.inventory_code}
                                    changeCart={boundProps.changeCart}
                                  />;
                })
            }
            </article>
        )
    }
}

export default InventoryProd;
