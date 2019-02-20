import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import Totals from "../Totals";

describe("Totals", () => {
  let wrapper;
  let allMenu = [
    {
      product: "Fireball",
      inventory_code: 10001,
      price_per_drink: 3,
      serving_size: 1.5,
      unit: "ounces",
      tier: "mid"
    },
    {
      product: "Jim Beam",
      inventory_code: 10002,
      price_per_drink: 5,
      serving_size: 1.5,
      unit: "ounces",
      tier: "mid"
    }
  ];
  let cartItems = [
    {
      product: "Fireball",
      inventory_code: 10001,
      type: "liquor",
      category: "whiskey",
      price: 18.78,
      size: 33.8,
      unit: "ounces"
    },
    {
      product: "Jim Beam",
      inventory_code: 10002,
      type: "liquor",
      category: "whiskey",
      price: 16.99,
      size: 25.3,
      unit: "ounces"
    }
  ];
  let menuObj = {
    product: "Fireball",
    inventory_code: 10001,
    price_per_drink: 3,
    serving_size: 1.5,
    unit: "ounces",
    tier: "mid"
  };
  let changeCart = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Totals
        cartMenu={allMenu}
        cartItems={cartItems}
        changeCart={changeCart}
      />
    );
  });
  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
