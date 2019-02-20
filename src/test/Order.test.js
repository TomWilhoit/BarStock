import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import Order from '../Order';

describe('Order', () => {
let wrapper;
let cartItems = [];
let user = "";
const mockFunc = jest.fn();

    beforeEach(() => {
        wrapper = shallow(
        <Order  
            cartItems={cartItems}
            user={user}
            displayObjects={mockFunc}
            submitOrder={mockFunc}
          />)
    })

    it('should match snapshot when all data is passed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    // it('should call the displayObjects method', () => {
    //     let sumCart = {}
    //     expect(sumCart).toEqual({})
        
        
    //     wrapper.instance().displayObjects();
    //     expect(wrapper)
        
    // })
})