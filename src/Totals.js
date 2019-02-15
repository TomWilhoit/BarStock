import React, { Component } from 'react';
import MockData from './mockData.js';
import App from './App.js';
import Inventory from './Inventory';
import './css/Totals.css';


class Totals extends Component {
  constructor(props) {
    super(props);
    this.state ={
      cartCodes: props.cartItems,
      cartObjs: []
    }
  }

  
  //Props.cartItems is an array of inventory codes.
  //I want to iterate over each object in the distributor.inventory array, find the object with the matching inventory code and return that object and put it in array cartObjects. 
  //Iterate over cartObjects and use reduce to return a sum. 
  
  render() {
    
    this.state.cartObjs = this.state.cartCodes.map(code => {
      let matchingObject = this.props.allInventory.find(item => {
        return item.inventory_code === code;
      });
      return matchingObject;
    })


    // this.state.cartObjs = objs;
  

    console.log(this.state.cartObjs[0])
    
    let sum = this.state.cartObjs.reduce((acc, currObj) => {
      // acc++
      // console.log(currObj.price)
      // return acc + currObj.price; 
    }, 0)

    // console.log(sum);
    // let sum = 0;

    this.state.cartObjs.forEach((el, i) => {
      // console.log(el);
      // sum += el.price;
    })

    // console.log(sum);

    return (
      <div className="Totals">
        <h2>Totals</h2>
      </div>
    );
  }
};






export default Totals;