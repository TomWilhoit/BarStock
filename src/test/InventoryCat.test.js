import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import InventoryCat from "../InventoryCat";
import mockData from "../mockData";

let allInventory = mockData.distributor[0].inventory;
const mockFunc = jest.fn();

describe("InventoryCat", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <InventoryCat
        category={allInventory[0].category}
        products={allInventory}
        toggleCat={mockFunc}
        displayProds={mockFunc}
      />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should display the products in a given category", () => {
    wrapper.find(".closed").simulate("click", { preventDefault: () => {} });
    expect(mockFunc).toBeCalled();
  });
});
