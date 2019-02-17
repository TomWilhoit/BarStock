import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import InventoryProd from '../InventoryProd';


let products = [{
  "product": "Oskar Blues Pinner",
  "inventory_code": 10030,
  "type": "beer",
  "category": "indian pale ale",
  "price": 28.00,
  "size": 24,
  "unit": "case"
},
{
  "product": "Lagunitas IPA",
  "inventory_code": 10034,
  "type": "beer",
  "category": "indian pale ale",
  "price": 32.12,
  "size": 24,
  "unit": "case"
}]
let category = "indian pale ale"
const changeCart = jest.fn()

describe('InventoryProd', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <InventoryProd allProducts={products} category={category} changeCart={changeCart} />
      )
    });
    it('should match snapshot when all data is passed correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  })
