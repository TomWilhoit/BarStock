import React, { Component } from "react";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
  }

  addProduct = () => {
    this.props.changeCart(this.props.product, "plusOne");
    this.setState({
      quantity: this.state.quantity++
    });
  };

  minusProduct = () => {
    if (this.state.quantity > 0) {
      this.props.changeCart(this.props.product, "minusOne");
      this.setState({
        quantity: this.state.quantity--
      });
    }
  };

  currQuantity = () => {
    let currNum = this.props.cartItems.reduce((acc, prod) => {
      if (prod.inventory_code === this.props.product.inventory_code) {
        acc++;
      }
      return acc;
    }, 0);
    this.state.quantity = currNum;
    return this.state.quantity;
  };

  render() {
    let productName = this.props.product.inventory_code;

    return (
      <section
        className="Single-product"
        id={this.props.product.inventory_code}
      >
        <div className="product-img">
          <img src={require(`./images/${productName}.png`)} alt="productImg" />
        </div>
        <div className="product-info">
          <h4>{this.props.product.product}</h4>
          <h5>
            <span>
              {this.props.product.size} {this.props.product.unit} / $
              {this.props.product.price.toFixed(2)}
            </span>
          </h5>
        </div>
        <div className="product-quantity">
          <section className="quantity-amount">
            <button className="minus" onClick={this.minusProduct}>
              <i className="fas fa-minus" />
            </button>
            <div className="amount">{this.currQuantity()}</div>
            <button className="plus" onClick={this.addProduct}>
              <i className="fas fa-plus" />
            </button>
          </section>
          <section className="quantity-label">
            <p>Current Quantity</p>
          </section>
        </div>
      </section>
    );
  }
}

export default CartItem;
