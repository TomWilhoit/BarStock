import React, { Component } from 'react';
import MockData from './mockData.js';
import App from './App.js';
import './css/Inventory.css';


class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  displayCategories() {
    let testVar = this.props.allProducts[0].map( product => {
      return product.category;
    });
  }

  render() {
    return (
      <div className="Inventory">
        <h2>Inventory</h2>
        { this.displayCategories() }
        {/* { 
          this.props.allProducts.map(product => {
      return product.category})
    } */}
      </div>
    );
  }
};








export default Inventory;