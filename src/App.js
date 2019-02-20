import React, { Component } from "react";
import "./css/App.scss";
import Inventory from "./Inventory.js";
import Totals from "./Totals.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Login from "./Login.js";
import Order from "./Order.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loginDisplay: true,
      allDistributors: [],
      allInventory: [],
      allMenu: [],
      cartItems: [],
      totalCost: 0,
      currentUser: "",
      finalOrder: false
    };
  }

  componentDidMount() {
    fetch("http://whateverly-datasets.herokuapp.com/api/v1/distributor")
      .then(response => response.json())
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
    const allCartItems = this.state.cartItems;
    let totalCost = this.state.totalCost;
    if (math === "plusOne") {
      totalCost += item.price;
      allCartItems.push(item);
      this.setState({
        cartItems: allCartItems,
        totalCost: totalCost
      });
    } else {
      const foundItem = allCartItems.findIndex(cartItem => {
        return cartItem === item;
      });
      totalCost -= allCartItems[foundItem].price;
      allCartItems.splice(foundItem, 1);
      this.setState({
        cartItems: allCartItems,
        totalCost: totalCost
      });
    }
  };

  toggleLogin = () => {
    if (this.state.loginDisplay === true) {
      this.setState({ loginDisplay: false });
    } else if (this.state.loginDisplay === false) {
      this.setState({ loginDisplay: true });
    }
  };

  submitOrder = () => {
    this.setState({
      finalOrder: true
    });
  };

  backToCart = () => {
    this.setState({
      finalOrder: false,
      loginDisplay: false
    });
  };

  loginAccount = userNameValue => {
    this.setState({
      currentUser: userNameValue
    });
  };

  render() {
    let submitClass = "disabled";
    this.state.cartItems.length >= 1
      ? (submitClass = "enabled")
      : (submitClass = "disabled");

    if (this.state.loginDisplay === true) {
      return (
        <div className="App">
          <Login
            loginDisplay={this.state.loginDisplay}
            toggleLogin={this.toggleLogin}
            loginAccount={this.loginAccount}
          />
        </div>
      );
    } else if (this.state.finalOrder === true) {
      return (
        <div className="App">
          <Order
            cartItems={this.state.cartItems}
            user={this.state.currentUser}
            finalTotal={this.state.totalCost}
            backToCart={this.backToCart}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="All-Content">
            <div className="Header-container">
              <Header currentUser={this.state.currentUser} />
            </div>
            <div className="content-container">
              <div className="Inventory-container">
                <Inventory
                  allInventory={this.state.allInventory}
                  changeCart={this.changeCart}
                  cartItems={this.state.cartItems}
                />
              </div>
              <div className="Totals-container">
                <Totals
                  cartMenu={this.state.allMenu}
                  cartItems={this.state.cartItems}
                  changeCart={this.changeCart}
                />
                <section className="Submit-order">
                  <button className={submitClass} onClick={this.submitOrder}>
                    Checkout
                  </button>
                </section>
              </div>
            </div>
            <div className="Footer-container">
              <Footer />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
