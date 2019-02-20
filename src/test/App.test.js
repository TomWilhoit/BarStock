import React from "react";
import App from "../App";
import { shallow } from "enzyme";

describe("App", () => {
  let wrapper;
  const mockFunc = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App loginAccount={mockFunc} />);
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({
      loginDisplay: true,
      allDistributors: [],
      allInventory: [],
      allMenu: [],
      cartItems: [],
      totalCost: 0,
      currentUser: "",
      finalOrder: false
    });
  });

  it("should change the state of loginDisplay when toggleLogin is invoked", () => {
    expect(wrapper.state("loginDisplay")).toEqual(true);
    wrapper.instance().toggleLogin();
    expect(wrapper.state("loginDisplay")).toEqual(false);
  });

  it("should change the state of finalOrder when submitOrder is invoked", () => {
    expect(wrapper.state("finalOrder")).toEqual(false);
    wrapper.instance().submitOrder();
    expect(wrapper.state("finalOrder")).toEqual(true);
  });

  it("should change the state of finalOrder to false when backToCart is invoked", () => {
    expect(wrapper.state("finalOrder")).toEqual(false);
    wrapper.instance().submitOrder();
    expect(wrapper.state("finalOrder")).toEqual(true);
    wrapper.instance().backToCart();
    expect(wrapper.state("finalOrder")).toEqual(false);
  });

  it("should change the state of loginAccount when invoked", () => {
    expect(wrapper.state("currentUser")).toEqual("");
    wrapper.instance().loginAccount("dang");
    expect(wrapper.state("currentUser")).toEqual("dang");
  });

  it("should be able to add items to your cart when changeCart is", () => {
    expect(wrapper.state("cartItems")).toEqual([]);
    let item = {
      product: "Jim Beam",
      inventory_code: 10002,
      type: "liquor",
      category: "whiskey",
      price: 16.99,
      size: 25.3,
      unit: "ounces"
    };
    wrapper.instance().changeCart(item, "plusOne");
    expect(wrapper.state("cartItems")).toHaveLength(1);
  });

  it("should be able to subtract items from your cart when changeCart is invoked", () => {
    let allCartItems = [
      {
        product: "Jim Beam",
        inventory_code: 10002,
        type: "liquor",
        category: "whiskey",
        price: 16.99,
        size: 25.3,
        unit: "ounces"
      },
      {
        product: "Fireball",
        inventory_code: 10001,
        type: "liquor",
        category: "whiskey",
        price: 18.78,
        size: 33.8,
        unit: "ounces"
      }
    ];

    wrapper.setState({ cartItems: allCartItems });
    wrapper.instance().changeCart(allCartItems[0], "minusOne");
    expect(wrapper.state("cartItems")).toHaveLength(1);
  });

  it("should update state when changeCart is invoked", () => {
    let item = {
      product: "Jim Beam",
      inventory_code: 10002,
      type: "liquor",
      category: "whiskey",
      price: 16.99,
      size: 25.3,
      unit: "ounces"
    };

    expect(wrapper.state("totalCost")).toEqual(0);
    wrapper.instance().changeCart(item, "plusOne");
    expect(wrapper.state("totalCost")).toEqual(item.price);
  });
});
