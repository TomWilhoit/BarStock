import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';



describe('App', () => {
  
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <App/>
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
  

  });