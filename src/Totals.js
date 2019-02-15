import React, { Component } from 'react';
import MockData from './mockData.js';
import App from './App.js';
import Inventory from './Inventory';
import './css/Totals.css';


class Totals extends Component {
  constructor(props) {
    super(props);
    this.state ={
      cartObjs: props.cartItems, 
      cartNew: props.cartMenu
    }
  }

  

  totalCost = () => {
    return this.state.cartObjs.reduce((acc, currObj) => {
      return acc += currObj.price; 
    }, 0)
  }

  

  totalProfit = () => {
    let matchingObject; 
    return this.state.cartObjs.reduce((acc, currObj) => {
      
      
  
        matchingObject = this.state.cartNew.find(item => {
          return item.inventory_code === currObj.inventory_code;
        });
        
        console.log(matchingObject.product)
      
      
    
        return acc; 
    }, 0)
  }



  
  render() {
    // console.log(this.state)
    return (
      <div className="Totals">
        <h3>Total Cost</h3>
        <h2>{this.totalCost()}</h2>
        <br/>
        <h3>Potential Profit</h3>
        <h2>{this.totalProfit()}</h2>
        {/* <h2>{this.totalProfit()}</h2> */}
      </div>
    );
  }
};






export default Totals;