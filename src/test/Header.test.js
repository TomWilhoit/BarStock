import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import Header from "../Header";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
