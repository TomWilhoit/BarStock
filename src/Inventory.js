import React, { Component } from "react";
import InventoryCat from "./InventoryCat.js";
import "./css/Inventory.scss";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLiquorCats: [],
      allBeerCats: [],
      displayType: "beer",
      selectedCat: ""
    };
  }

  toggleCat = el => {
    this.setState({
      selectedCat: el
    });
  };

  populateType = () => {
    this.props.allInventory.forEach(product => {
      if (
        !this.state.allLiquorCats.includes(product.category) &&
        product.type === "liquor"
      ) {
        this.state.allLiquorCats.push(product.category);
      }
      if (
        !this.state.allBeerCats.includes(product.category) &&
        product.type === "beer"
      ) {
        this.state.allBeerCats.push(product.category);
      }
    });
  };

  toggleType = event => {
    if (this.state.displayType === "beer") {
      this.setState({
        displayType: "liquor"
      });
    } else {
      this.setState({
        displayType: "beer"
      });
    }
  };

  render() {
    this.populateType();
    let displayCategories;
    let beerClass = "toggle-select active";
    let liquorClass = "toggle-select inactive";

    if (this.state.displayType === "liquor") {
      beerClass = "toggle-select inactive";
      liquorClass = "toggle-select active";
      displayCategories = this.state.allLiquorCats;
    } else if (this.state.displayType === "beer") {
      beerClass = "toggle-select active";
      liquorClass = "toggle-select inactive";
      displayCategories = this.state.allBeerCats;
    }

    const list = displayCategories.map(category => {
      return (
        <InventoryCat
          category={category}
          key={category}
          products={this.props.allInventory}
          toggleCat={this.toggleCat}
          selectedCat={this.state.selectedCat}
          changeCart={this.props.changeCart}
          cartItems={this.props.cartItems}
        />
      );
    });

    return (
      <div className="Inventory">
        <div className="Inventory-toggles">
          <button className={beerClass} onClick={this.toggleType}>
            <h3>
              <i className="fas fa-beer" /> Beer
            </h3>
          </button>
          <button className={liquorClass} onClick={this.toggleType}>
            <h3>
              <i className="fas fa-glass-whiskey" /> Liquor
            </h3>
          </button>
        </div>
        <div className="Category-display">
          <ul>{list}</ul>
        </div>
      </div>
    );
  }
}

export default Inventory;
