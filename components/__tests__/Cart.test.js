import { Provider } from "react-redux";
import Cart from "../cartPage/Cart";
import { render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("../../images/vegIcon.png", () => "");
jest.mock("../../images/nonVegIcon.png", () => "");
jest.mock("../../images/empty.avif", () => "");

test("Should load cart component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Cart />
      </Provider>
    </BrowserRouter>,
  );
//   const heading = screen.getAllByRole("heading");
const heading = screen.getByRole("heading", {name: "Cart"})

  // Assertion
//   expect(heading.length).toBe(2);
expect(heading).toBeInTheDocument();
});
