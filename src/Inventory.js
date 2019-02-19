import React, { Component } from 'react';
import App from './App.js';
import InventoryCat from './InventoryCat.js';
import './css/Inventory.css';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLiquorCats: [],
      allBeerCats: [],
      displayType: 1,
      selectedCat: ''
    }

    this.toggleType = this.toggleType.bind(this);
  }

  toggleCat = (el) => {
    this.setState({
      selectedCat: el
    })
  }

  populateType = () => {
    this.props.allInventory.forEach((product) => {
      if (!this.state.allLiquorCats.includes(product.category) && product.type === 'liquor') {
        this.state.allLiquorCats.push(product.category)
      }
      if (!this.state.allBeerCats.includes(product.category) && product.type === 'beer') {
        this.state.allBeerCats.push(product.category)
      }
    })
  }

  // Refactor
  toggleType(event) {
    let beerToggle = document.getElementById('0');
    let liquorToggle = document.getElementById('1');

    if (this.state.displayType === 0){
      beerToggle.classList.remove('inactive');
      liquorToggle.classList.add('inactive')
      this.setState({displayType : 1})
    } else if (this.state.displayType === 1) {
      liquorToggle.classList.remove('inactive');
      beerToggle.classList.add('inactive')
      this.setState({displayType : 0})
    }
  }

  render() {
    this.populateType();

    let displayCategories;

    if (this.state.displayType === 0) {
      displayCategories = this.state.allLiquorCats;
    } else if(this.state.displayType === 1) {
      displayCategories = this.state.allBeerCats;
    }

    return (
      <div className="Inventory">
        <div className="Inventory-toggles">
          <a id="0" className="toggle-select" onClick={this.toggleType}>
            <h3><i className="fas fa-beer"></i> Beer</h3>
          </a>
          <a id="1" className="toggle-select inactive" onClick={this.toggleType}>
            <h3><i className="fas fa-glass-whiskey"></i> Liquor</h3>
          </a>
        </div>
        <div className="Category-display">
          <ul>
            {
              displayCategories.map((category) => {
                return <InventoryCat  category={category} key={category}
                                      products={this.props.allInventory}
                                      toggleCat={this.toggleCat}
                                      selectedCat={this.state.selectedCat}
                                      changeCart={this.props.changeCart}
                                      cartItems={this.props.cartItems}
                                    />
              })
            }
          </ul>
        </div>
      </div>
    );
  }
};








export default Inventory;
