import React, { Component } from 'react';
import MockData from './mockData.js';
import App from './App.js';
import InventoryCats from './InventoryCats.js';
import './css/Inventory.css';


class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLiquorCats: [],
      allBeerCats: [],
      displayState: 1
    }
    this.displayCategories = this.displayCategories.bind(this);
    this.toggleCategories = this.toggleCategories.bind(this);

    
    // console.log('this state ', this.state.allLiquorCats);
    // console.log('this state ', this.state.allBeerCats);
  }

  toggleCategories(event) {
    let beerToggle = document.getElementById('0');
    let liquorToggle = document.getElementById('1');
    
    
    if(this.state.displayState === 0){
      beerToggle.classList.remove('inactive');
      liquorToggle.classList.add('inactive')
      this.setState({displayState : 1})
    } else if(this.state.displayState === 1) {
      liquorToggle.classList.remove('inactive');
      beerToggle.classList.add('inactive')
      this.setState({displayState : 0})
    }
  }

  displayCategories(ex) {
    return this.props.allProducts.filter(function (cat) { 
      return cat.category === ex;
    }).map(function (el) {  
      return <li key={el.inventory_code}>{el.product}</li>
    })
  }
 
  render() {
    this.props.allProducts.forEach((product, index) => {
      if(!this.state.allLiquorCats.includes(product.category) && product.type === 'liquor'){
        this.state.allLiquorCats.push(product.category)
      } 
      if (!this.state.allBeerCats.includes(product.category) && product.type === 'beer') {
        this.state.allBeerCats.push(product.category)
      } 


    })

    let displayCategory;

    if(this.state.displayState === 0){
      displayCategory = this.state.allLiquorCats;
    }else if(this.state.displayState === 1){
      displayCategory = this.state.allBeerCats;
    }


    return (
      <div className="Inventory">
        <div className="Inventory-toggles">
          <a id="0" className="toggle-select" onClick={this.toggleCategories}>
            <h3><i className="fas fa-beer"></i> Beer</h3>
          </a>
          <a id="1" className="toggle-select inactive" onClick={this.toggleCategories}>
            <h3><i className="fas fa-glass-whiskey"></i> Liquor</h3>
          </a>
        </div>
        <div className="Category-display">
          <ul>
            { 
              
              displayCategory.map((inventory, index) => {
                return <InventoryCats types={inventory} key={inventory} products={this.props.allProducts} />
              })
              }
          </ul>
        </div>
      </div>
    );
  }
  
};








export default Inventory;