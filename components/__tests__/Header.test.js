import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import useThemeContext from "../../utils/useThemeContext";

// mock the images used
jest.mock("../../images/moon.png", () => "");
jest.mock("../../images/light.png", () => "");
jest.mock("../../images/cereal.png", () => "");
jest.mock("../../images/github.png", () => "");
jest.mock("../../images/cart-light.png", () => "");
jest.mock("../../images/cart-dark.png", () => "");

describe("Header test cases", () => {
  it("Should load Header component with a Login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <useThemeContext.Provider value={{ setThemeName: "dark" }}>
            <Header />
          </useThemeContext.Provider>
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
  });

  it("Should change Login to Logout on Click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <useThemeContext.Provider value={{ setThemeName: "dark" }}>
            <Header />
          </useThemeContext.Provider>
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", {name:'Login'});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name:'Logout'});
    expect(logoutButton).toBeInTheDocument();
  });
});
