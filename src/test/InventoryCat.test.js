import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import InventoryCat from '../InventoryCat';


describe('InventoryCat', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <InventoryCat/>
      )
    });
    it('should match snapshot when all data is passed correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
    
  })