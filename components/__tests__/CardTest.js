import { render, screen } from "@testing-library/react";
import Card, { CardPromoted } from "../Card";
import { ResturantMockData } from "../Mocks/ResturantMockData";
import "@testing-library/jest-dom";

jest.mock("../../images/star.png", () => "");

describe("Card Rendering Tests", () => {
  it("Should load card with correct restaurant name", () => {
    render(<Card resData={ResturantMockData} />);

    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
  });

  it("Should load Card with promoted label", () => {
    const CardsPromoted = CardPromoted(Card);
    render(<CardsPromoted resData={ResturantMockData} />);
    const label = screen.getByText("Promoted");
    expect(label).toBeInTheDocument(0);
  });
});
