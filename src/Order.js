import React, { Component } from 'react';
import App from './App.js';
import BarLogo from './BarStock_Logo.png'
import './css/Order.scss';

class Order extends Component {
  constructor(props) {
    super(props);
  }

  displayObjects = () => {
    let sumCart = this.props.cartItems.reduce((acc, el) => {
      if(!acc[el.product]){
        acc[el.product] = 0
      }
      acc[el.product]++
      return acc
    }, {});
    return Object.keys(sumCart).map((prod, index) => {
      let thisProd = this.props.cartItems.find(ac => ac.product === prod)
      return <li className="orders-list" key={index}>
        <h5 key={index}>{sumCart[prod]} x {prod} = Total: ${(thisProd.price * sumCart[prod]).toFixed(2)}</h5>
      </li>
    })
  }

  send = () => {
    var link = "mailto:michaelryankrog@gmail.com"
           + "&subject=" + escape("This is my subject")
           + "&body=" + escape(document.getElementById('myText').innerText)
  ;
    window.location.href = link;
  }


  render() {
    return (
      <div className="Order-container">
        <form className="Order">
          <h3 className="order-quote">Confirmation {this.props.user}</h3>
          <div id="myText" className="order-form">
            {this.displayObjects()}
          </div>
          <button className="order-button" onClick={this.send}>Submit Order</button>
        </form>
      </div>
    );
  }
};



export default Order;
