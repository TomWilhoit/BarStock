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
      currentUser: ""
      })
    });

    it('should change the state of loginDisplay when invoked', () => {
    expect(wrapper.state('loginDisplay')).toEqual(true);
    wrapper.instance().toggleLogin();
    expect(wrapper.state('loginDisplay')).toEqual(false);
    })

    it('should change the state of loginDisplay when invoked', () => {
      expect(wrapper.state('currentUser')).toEqual('');
      wrapper.instance().loginAccount('dang');
      expect(wrapper.state('currentUser')).toEqual('dang');
      })

    // it('should alter the items displayed in your cart ', () => {
    //   expect(wrapper.state('cartItems')).toEqual([]);
    //   wrapper.instance().changeCart();
    //   expect(wrapper.state('loginDisplay')).toEqual(false);
    //   })
  });