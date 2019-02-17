import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import Inventory from '../Inventory';
import mockData from '../mockData';

let allInventory = mockData.distributor;

describe('Inventory', () => {
  let wrapper;
  
  
  const changeCart = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(
      <Inventory allInventory={allInventory} changeCart={changeCart} />
      )
    });

    it('should have a proper default state', () => {
      
      expect(wrapper.state()).toEqual({
        allLiquorCats: [],
        allBeerCats: [],
        displayType: 1,
        selectedCat: ''
        })
      });

    it('should match snapshot when all data is passed correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    
  })