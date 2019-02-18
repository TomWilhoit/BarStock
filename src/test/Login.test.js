import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import Login from '../Login';


describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Login/>
      )
    });
    it('should match snapshot when all data is passed correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
    
  })