import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import InventoryProd from "../InventoryProd";
import mockData from "../mockData";

let products = mockData.distributor[0].inventory;
let category = mockData.distributor[0].inventory[0].category;
const changeCart = jest.fn();

describe("InventoryProd", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <InventoryProd
        allProducts={products}
        category={category}
        changeCart={changeCart}
      />
    );
  });
  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
