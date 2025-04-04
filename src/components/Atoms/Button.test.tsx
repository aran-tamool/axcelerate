import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button"; // Update the import path if necessary

describe("Button component", () => {
  test("renders button with the correct label", () => {
    render(<Button label="Click me" />);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  test("applies primary style when primary prop is true", () => {
    render(<Button primary label="Primary Button" />);
    const button = screen.getByText("Primary Button");
    expect(button).toHaveClass("storybook-button--primary");
  });

  test("applies secondary style when primary prop is false", () => {
    render(<Button primary={false} label="Secondary Button" />);
    const button = screen.getByText("Secondary Button");
    expect(button).toHaveClass("storybook-button--secondary");
  });

  test("applies the correct size class based on the size prop", () => {
    render(<Button size="large" label="Large Button" />);
    const button = screen.getByText("Large Button");
    expect(button).toHaveClass("storybook-button--large");

    render(<Button size="small" label="Small Button" />);
    const smallButton = screen.getByText("Small Button");
    expect(smallButton).toHaveClass("storybook-button--small");
  });

  test("applies custom background color from backgroundColor prop", () => {
    const backgroundColor = "#ff6347";
    render(<Button backgroundColor={backgroundColor} label="Styled Button" />);
    const button = screen.getByText("Styled Button");
    expect(button).toHaveStyle(`background-color: ${backgroundColor}`);
  });

  test("executes the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} label="Click Me" />);

    const button = screen.getByText("Click Me");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick handler if not provided", () => {
    const { container } = render(<Button label="Click Me" />);
    const button = container.querySelector("button");

    // Since no onClick handler is passed, nothing should happen on click
    fireEvent.click(button!);
    expect(button).toBeInTheDocument(); // Just ensures the button is rendered
  });

  test("renders correctly with default props", () => {
    const { container } = render(<Button label="Default Button" />);
    const button = container.querySelector("button");
    expect(button).toHaveClass("storybook-button--medium"); // Default size
    expect(button).toHaveClass("storybook-button--secondary"); // Default primary prop is false
  });
});
