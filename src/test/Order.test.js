import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import { Order } from "../Order";

describe("Order", () => {
  let wrapper;
  let cartItems = [];
  let user = "";
  const mockFunc = jest.fn();
  let finalTotal = 0;

  beforeEach(() => {
    wrapper = shallow(
      <Order
        finalTotal={finalTotal}
        cartItems={cartItems}
        user={user}
        displayObjects={mockFunc}
        submitOrder={mockFunc}
      />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should change the state of orderComplete when send is invoked", () => {
    expect(wrapper.state("orderComplete")).toEqual(false);
    wrapper.instance().send();
    expect(wrapper.state("orderComplete")).toEqual(true);
  });
});
