import React, { Component } from 'react';
import MockData from './mockData.js';
import App from './App.js';
import './css/Inventory.css';


class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLiquor: [],
      allBeer: []
    }

  }

  displayCategories() {
    let typesArray = [];
    this.props.allProducts[0].forEach((product, index) => {
      if (!typesArray.includes(product.category)) {
        typesArray.push(product.category);
        typesArray.forEach((el, index) => {
          return  <li key={index}>{product.type}</li>
        })
        // return <li key={index}>{product.type}</li>
      }
    })
    console.log(typesArray);
  }

  render() {
    return (
      <div className="Inventory">
        <div className="liquor-toggles">
          <section>Liquor</section>
          <section>Beer</section>
        </div>
        <div className="display-liquor">
        
        </div>
        <ul> 
          { this.displayCategories() }
        </ul>
      </div>
    );
  }
};








export default Inventory;