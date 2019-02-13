import React, { Component } from 'react';
import MockData from './mockData.js';
import App from './App.js';
import InventoryTypes from './InventoryTypes.js';
import './css/Inventory.css';


class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLiquor: [],
      allBeer: []
    }
    this.displayCategories = this.displayCategories.bind(this);
    this.toggleCategories = this.toggleCategories.bind(this);
  }

  toggleCategories(event) {
    let thisToggle = event.target;
    let allTogglesClick = document.querySelectorAll('.toggle-select')
    allTogglesClick.forEach((el, i) => {
      el.classList.remove('inactive');
    })
    thisToggle.classList.add('inactive');
  }

  displayCategories(ex) {
    return this.props.allProducts[0].filter(function (cat) { 
      return cat.category === ex;
    }).map(function (el) {  
      return <li key={el.inventory_code}>{el.product}</li>
    })
  }

  render() {
    return (
      <div className="Inventory">
        <div className="Inventory-toggles">
          <a className="toggle-select inactive" onClick={this.toggleCategories}>
            <h3><i className="fas fa-beer"></i> Beer</h3>
          </a>
          <a className="toggle-select" onClick={this.toggleCategories}>
            <h3><i className="fas fa-glass-whiskey"></i> Liquor</h3>
          </a>
        </div>
        <div className="Category-display">
          <InventoryTypes />
          {
            // <ul>{this.displayCategories('whiskey')}</ul>
          }
        </div>
      </div>
    );
  }
  
};








export default Inventory;