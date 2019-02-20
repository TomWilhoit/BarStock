import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import Login from "../Login";

const mockFunc = jest.fn();

describe("Login", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Login
        handleEvent={mockFunc}
        handleClick={mockFunc}
        toggleLogin={mockFunc}
        loginAccount={mockFunc}
      />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update the state of userNameValue and passwordValue on change", () => {
    const initialState = { userNameValue: "", passwordValue: "" };
    const expectedState = { userNameValue: "Taylor", passwordValue: "abc" };
    expect(wrapper.state()).toEqual(initialState);
    wrapper
      .find(".username-input")
      .simulate("change", {
        target: { name: "userNameValue", value: "Taylor" }
      });
    console.warn();

    wrapper
      .find(".password-input")
      .simulate("change", { target: { name: "passwordValue", value: "abc" } });
    expect(wrapper.state()).toEqual(expectedState);
  });

  it("should invoke toggleLogin", () => {
    wrapper
      .find(".login-button")
      .simulate("click", { preventDefault: () => {} });
    expect(mockFunc).toBeCalled();
  });
});
