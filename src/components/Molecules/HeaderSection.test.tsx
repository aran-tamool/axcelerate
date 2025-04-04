import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { HeaderSection } from "./HeaderSection";
import "@testing-library/jest-dom";

describe("HeaderSection", () => {
  it("renders the title", () => {
    render(
      <HeaderSection
        title="Test Title"
        expanded={false}
        handleOnClick={() => {}}
      />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders ChevronRight when expanded is false", () => {
    render(
      <HeaderSection
        title="Test Title"
        expanded={false}
        handleOnClick={() => {}}
      />
    );
    const chevronRight = screen.getByTestId("chevron-right");
    expect(chevronRight).toBeInTheDocument();
    expect(chevronRight).toBeVisible();
  });

  it("renders ChevronDown when expanded is true", () => {
    render(
      <HeaderSection
        title="Test Title"
        expanded={true}
        handleOnClick={() => {}}
      />
    );
    const chevronDown = screen.getByTestId("chevron-down");
    expect(chevronDown).toBeInTheDocument();
    expect(chevronDown).toBeVisible();
  });

  it("calls handleOnClick when clicked", () => {
    const handleOnClick = jest.fn();
    render(
      <HeaderSection
        title="Test Title"
        expanded={false}
        handleOnClick={handleOnClick}
      />
    );
    fireEvent.click(
      screen.getByText("Test Title").closest("div") as HTMLElement
    );
    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });
  it("renders with correct styles", () => {
    const { container } = render(
      <HeaderSection
        title="Test Title"
        expanded={false}
        handleOnClick={() => {}}
      />
    );
    const headerContainer = container.firstChild;
    expect(headerContainer).toHaveStyle("background: #ffffff");
    expect(headerContainer).toHaveStyle("border-width: 1px 0px 1px 0px");
    expect(headerContainer).toHaveStyle("border-style: solid");
    expect(headerContainer).toHaveStyle("border-color: #e4e5e8");
    expect(headerContainer).toHaveStyle("width: 400px");
    expect(headerContainer).toHaveStyle("height: 37px");
  });
  it("renders hover style", () => {
    const { container } = render(
      <HeaderSection
        title="Test Title"
        expanded={false}
        handleOnClick={() => {}}
      />
    );
    const headerContainer = container.firstChild as HTMLElement;
    fireEvent.mouseOver(headerContainer);
    expect(headerContainer).toHaveStyle("background: #f2f5f7");
  });
  it("renders active style", () => {
    const { container } = render(
      <HeaderSection
        title="Test Title"
        expanded={false}
        handleOnClick={() => {}}
      />
    );
    const headerContainer = container.firstChild as HTMLElement;
    fireEvent.mouseDown(headerContainer);
    expect(headerContainer).toHaveStyle("background: #ffffff");
  });
});
