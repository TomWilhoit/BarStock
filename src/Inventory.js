import React, { Component } from 'react';
import MockData from './mockData.js';
import App from './App.js';
import InventoryTypes from './InventoryTypes.js';
import './css/Inventory.css';


class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< Updated upstream
      allLiquorCats: [],
      allBeerCats: []
    }
    this.displayCategories = this.displayCategories.bind(this);
    this.toggleCategories = this.toggleCategories.bind(this);

    
    // console.log('this state ', this.state.allLiquorCats);
    // console.log('this state ', this.state.allBeerCats);
  }

  toggleCategories(event) {
    // let thisToggle = event.target;
    // let allTogglesClick = document.querySelectorAll('.toggle-select')
    // allTogglesClick.forEach((el, i) => {
    //   el.classList.remove('inactive');
    // })
    // thisToggle.classList.add('inactive');
  }

  displayCategories(search) {
    return this.props.allProducts[0].filter(function (cat) { 
      return cat.category === search;
=======
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
>>>>>>> Stashed changes
    }).map(function (el) {  
      return <li key={el.inventory_code}>{el.product}</li>
    })
  }
 
  render() {
<<<<<<< Updated upstream
    this.props.allProducts[0].forEach((product, index) => {
      if(!this.state.allLiquorCats.includes(product.category) && product.type === 'liquor'){
        this.state.allLiquorCats.push(product.category)
      } 
      if (!this.state.allBeerCats.includes(product.category) && product.type === 'beer') {
        this.state.allBeerCats.push(product.category)
      } 
    })

=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <ul>
            { 
              this.state.allLiquorCats.map((inventory, index) => {
                return <InventoryTypes types={inventory} key={inventory} />
              })
              }
          </ul>
=======
          <InventoryTypes />
          {
            // <ul>{this.displayCategories('whiskey')}</ul>
          }
>>>>>>> Stashed changes
        </div>
      </div>
    );
  }
  
};








export default Inventory;