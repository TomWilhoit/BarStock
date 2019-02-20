import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import CartItem from '../CartItem';


describe('CartItem', () => {
  let product = {
    "product": "Fireball",
    "inventory_code": 10001,
    "type": "liquor",
    "category": "whiskey",
    "price": 18.78,
    "size": 33.8,
    "unit": "ounces"
  }

  let wrapper;
  let inventory_code = product.inventory_code;
  let cartItems = [];

  beforeEach(() => {
    wrapper = shallow(
      <CartItem product={product} key={inventory_code} className="CartItem" changeCart={changeCart} cartItems={cartItems} />
        )})

  const changeCart = jest.fn();
  const currQuantity = jest.fn();

  it('should match snapshot when all data is passed correctly', () => {
    let cartItems = [{
      "product": "Fireball",
      "inventory_code": 10001,
      "type": "liquor",
      "category": "whiskey",
      "price": 18.78,
      "size": 33.8,
      "unit": "ounces"
    },
    {
      "product": "Jim Beam",
      "inventory_code": 10002,
      "type": "liquor",
      "category": "whiskey",
      "price": 16.99,
      "size": 25.3,
      "unit": "ounces"
    }]

    expect(wrapper).toMatchSnapshot();
  });

  it('should have a proper default state', () => {
    let cartItems = [
    {
      "product": "Jim Beam",
      "inventory_code": 10002,
      "type": "liquor",
      "category": "whiskey",
      "price": 16.99,
      "size": 25.3,
      "unit": "ounces"
    }]

    wrapper = shallow(
      <CartItem product={product} className="CartItem" changeCart={changeCart} cartItems={cartItems} />
        )

    expect(wrapper.state('quantity')).toEqual(0)
    });


    
})