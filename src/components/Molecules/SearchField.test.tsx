import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchField } from "./SearchField";

describe("SearchField", () => {
  it("renders without crashing", () => {
    render(<SearchField handleInput={() => {}} />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("calls handleInput with the correct value on key up", () => {
    const handleInput = jest.fn();
    render(<SearchField handleInput={handleInput} />);
    const input = screen.getByPlaceholderText("Search");
    fireEvent.keyUp(input, { target: { value: "test" } });
    expect(handleInput).toHaveBeenCalledWith("test");
  });

  it("renders the search icon", () => {
    render(<SearchField handleInput={() => {}} />);
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });

  it("input has correct type", () => {
    render(<SearchField handleInput={() => {}} />);
    const input = screen.getByPlaceholderText("Search");
    expect(input.getAttribute("type")).toBe("text");
  });

  it("input has correct placeholder", () => {
    render(<SearchField handleInput={() => {}} />);
    const input = screen.getByPlaceholderText("Search");
    expect(input.getAttribute("placeholder")).toBe("Search");
  });
});
