import RestaurantMenu from "../restaurantPage/RestaurantMenu";
import MOCK_DATA from "../Mocks/ItemsMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import useThemeContext from "../../utils/useThemeContext";
import Cart from "../cartPage/Cart";
import "@testing-library/jest-dom";

jest.mock("../../images/searchIcon.png", () => "");
jest.mock("../../images/down.png", () => "");
jest.mock("../../images/up.png", () => "");
jest.mock("../../images/rating.png", () => "");

jest.mock("../../images/moon.png", () => "");
jest.mock("../../images/light.png", () => "");
jest.mock("../../images/cereal.png", () => "");
jest.mock("../../images/github.png", () => "");
jest.mock("../../images/cart-light.png", () => "");
jest.mock("../../images/cart-dark.png", () => "");

jest.mock("../../images/vegIcon.png", () => "");
jest.mock("../../images/nonVegIcon.png", () => "");
jest.mock("../../images/empty.avif", () => "");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  }),
);

it("Should add items on clicking add button", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Cart />
          <useThemeContext.Provider value={{ setThemeName: "dark" }}>
            <Header />
          </useThemeContext.Provider>
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>,
    ),
  );

  const empty = screen.getByText("Your cart is Empty :(");
  expect(empty).toBeInTheDocument();

  const count = screen.getByTestId("itemCount");
  const buttons = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[1]);
  fireEvent.click(buttons[2]);
  const cartCount = screen.getAllByTestId("addedItem");
  expect(empty).not.toBeInTheDocument();
  expect(count.innerHTML).toBe("3");
  expect(cartCount.length).toBe(3);
});
