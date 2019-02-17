import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import CartItem from '../CartItem';


describe('CartItem', () => {
  let wrapper;
  const changeCart = jest.fn();
  let product = {
    "product": "Fireball",
    "inventory_code": 10001,
    "type": "liquor",
    "category": "whiskey",
    "price": 18.78,
    "size": 33.8,
    "unit": "ounces"
  }
  let inventory_code = 10001

  beforeEach(() => {
    wrapper = shallow(
      <CartItem product={product} key={inventory_code} className="CartItem" changeCart={changeCart} />
      )
    });


    it('should match snapshot when all data is passed correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have a proper default state', () => {
      expect(wrapper.state()).toEqual({
        quantity: 0
        })
      });


    
  })