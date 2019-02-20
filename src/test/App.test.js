import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  
  let wrapper;
  const mockFunc = jest.fn();

  
  beforeEach(() => {
    wrapper = shallow(
      <App loginAccount = {
        mockFunc}
      />
      )
    })
  
  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({
      loginDisplay: true,
      allDistributors: [],
      allInventory: [], 
      allMenu: [],
      cartItems: [],
      cartMenu: [], 
      totalCost: 0,
      totalProjected: 0,
      currentUser: "",
      finalOrder: false
      })
    });

    it('should change the state of loginDisplay when invoked', () => {
    expect(wrapper.state('loginDisplay')).toEqual(true);
    wrapper.instance().toggleLogin();
    expect(wrapper.state('loginDisplay')).toEqual(false);
    })

    it('should change the state of loginAccount when invoked', () => {
      expect(wrapper.state('currentUser')).toEqual('');
      wrapper.instance().loginAccount('dang');
      expect(wrapper.state('currentUser')).toEqual('dang');
    })

    it('should change the state of finalOrder when invoked', () => {
      expect(wrapper.state('finalOrder')).toEqual(false);
      wrapper.instance().submitOrder();
      expect(wrapper.state('finalOrder')).toEqual(true);
    })

    it('should add items to your cart ', () => {
      expect(wrapper.state('cartItems')).toEqual([]);
      let item = {
        "product": "Jim Beam",
        "inventory_code": 10002,
        "type": "liquor",
        "category": "whiskey",
        "price": 16.99,
        "size": 25.3,
        "unit": "ounces"
      }
      wrapper.instance().changeCart(item, 'plusOne');
      expect(wrapper.state('cartItems')).toHaveLength(1);
    })

    it('should subtract items from your cart ', () => {
      let cartItems = [{
        "product": "Jim Beam",
        "inventory_code": 10002,
        "type": "liquor",
        "category": "whiskey",
        "price": 16.99,
        "size": 25.3,
        "unit": "ounces"
      },
      {
        "product": "Fireball",
        "inventory_code": 10001,
        "type": "liquor",
        "category": "whiskey",
        "price": 18.78,
        "size": 33.8,
        "unit": "ounces"
      }];
      
      wrapper.setState({cartItems: cartItems})
      
      let item = {
        "product": "Jim Beam",
        "inventory_code": 10002,
        "type": "liquor",
        "category": "whiskey",
        "price": 16.99,
        "size": 25.3,
        "unit": "ounces"
      }
      wrapper.instance().changeCart(item, 'minusOne');
      expect(wrapper.state('cartItems')).toHaveLength(1);
    })
    
  });