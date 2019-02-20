import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import Inventory from "../Inventory";
import mockData from "../mockData";

let defaultInventory = mockData.distributor;
let allInventory = mockData.distributor[0].inventory;

describe("Inventory", () => {
  let wrapper;

  const changeCart = jest.fn();

  it("should have a proper default state", () => {
    wrapper = shallow(
      <Inventory allInventory={defaultInventory} changeCart={changeCart} />
    );
    expect(wrapper.state()).toEqual({
      allLiquorCats: [],
      allBeerCats: [],
      displayType: "beer",
      selectedCat: ""
    });
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //toggleCat
  it("should update the category selection when toggleCat is called", () => {
    expect(wrapper.state("selectedCat")).toEqual("");
    wrapper.instance().toggleCat(allInventory[0].category);
    expect(wrapper.state("selectedCat")).toEqual("whiskey");
  });

  //populateType
  it("should update allLiquorCats with all liquor products", () => {
    wrapper = shallow(
      <Inventory allInventory={allInventory} changeCart={changeCart} />
    );
    wrapper.instance().populateType();
    expect(wrapper.state("allLiquorCats")).toEqual([
      "whiskey",
      "vodka",
      "tequilla",
      "rum",
      "gin"
    ]);
  });

  it("should update allBeerCats with all beer products", () => {
    wrapper = shallow(
      <Inventory allInventory={allInventory} changeCart={changeCart} />
    );
    wrapper.instance().populateType();
    expect(wrapper.state("allBeerCats")).toEqual([
      "lager",
      "pilsner",
      "indian pale ale",
      "pale ale",
      "sour"
    ]);
  });
});
