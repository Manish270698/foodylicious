import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../Mocks/RestaurantListMockData.json";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../images/star.png", () => "");
jest.mock("../../images/searchIcon.png", () => "");

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search Snacks from the restaurant list", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(9);

  const searchInput = screen.getByPlaceholderText("restaurants and cuisines");
  fireEvent.change(searchInput, { target: { value: "snacks" } });

  const filteredCards = screen.getAllByTestId("resCard");
  expect(filteredCards.length).toBe(2);
});

it("Should filter top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(9);

  const topBtn = screen.getByText("Top Rated Restaurants");
  fireEvent.click(topBtn);

  const filteredCards = screen.getAllByTestId("resCard");
  expect(filteredCards.length).toBe(9);
});
