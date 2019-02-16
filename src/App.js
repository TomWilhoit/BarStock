import React, { Component } from 'react';
import './css/App.css';
import Inventory from './Inventory.js';
import Totals from './Totals.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Login from './Login.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      loginDisplay: true,
      allDistributors: [],
      allInventory: [], 
      allMenu: [],
      cartItems: [],
      cartMenu: [], 
      totalCost: 0,
      totalProjected: 0,
      currentUser: ""
    }
  }

  componentDidMount() {
    fetch("http://whateverly-datasets.herokuapp.com/api/v1/distributor")
      .then(response=> response.json())
      .then(supplier => {
        this.setState({
          allInventory: supplier.distributor[0].inventory,
          allDistributors: supplier.distributor[0]
        });
      })
      .catch(error => {
        throw new Error(error);
      });

    fetch("http://whateverly-datasets.herokuapp.com/api/v1/menu")
      .then(response => response.json())
      .then(products => {
        this.setState({
          allMenu: products.menu
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  }


  changeCart = (item, math) => {
    if (math === "plusOne") {
      console.log("add");
      this.setState({
        cartItems : this.state.cartItems.concat(item)
      })
    } else {
      console.log("subtract");
      const allCartItems = this.state.cartItems
      const foundItem = allCartItems.findIndex(cartItem => {
        return cartItem === item;
      });
      allCartItems.splice(foundItem, 1)
      this.setState({
        cartItems: allCartItems
      })
    }
  }


  toggleLogin = () => {
    if(this.state.loginDisplay===true){
    this.setState({loginDisplay:false})
    }else if(this.state.loginDisplay === false){
      this.setState({loginDisplay:true})
    }
  }


  render() {
    return (
      <div className="App">
          <Login  loginDisplay={this.state.loginDisplay}
                  toggleLogin={this.toggleLogin}/>
        <div className="Header-container">
          <Header/>
        </div>
        <div></div> 
        <div className="Inventory-container">
          <Inventory allInventory={this.state.allInventory} changeCart={this.changeCart} />
        </div>
        <div className="Totals-container">
          <Totals cartMenu={this.state.allMenu}
                  cartItems={this.state.cartItems}
                  />
        </div>
        <div className="Footer-container">
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
