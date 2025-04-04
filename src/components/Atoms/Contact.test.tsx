import { render, screen } from "@testing-library/react";
import { Contact, ContactProps } from "./Contact";

describe("Contact", () => {
  const defaultProps: ContactProps = {
    name: "Jane Doe",
    email: "jane@hotmail.com",
    image: "/imgs/pfp.jpeg",
    enabled: false,
  };

  it("should render the contact name", () => {
    render(<Contact {...defaultProps} />);
    const nameElement = screen.getByText("Jane Doe");
    expect(nameElement).toBeInTheDocument();
  });

  it("should render the contact email", () => {
    render(<Contact {...defaultProps} />);
    const emailElement = screen.getByText("jane@hotmail.com");
    expect(emailElement).toBeInTheDocument();
  });

  it("should render the contact image", () => {
    render(<Contact {...defaultProps} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("alt", "image");
  });

  it("should render the name with the correct color when enabled is true", () => {
    render(<Contact {...defaultProps} enabled={true} />);
    const nameElement = screen.getByText("Jane Doe");
    expect(nameElement).toHaveStyle("color: #6B46EF");
  });

  it("should render the name with the correct color when enabled is false", () => {
    render(<Contact {...defaultProps} enabled={false} />);
    const nameElement = screen.getByText("Jane Doe");
    expect(nameElement).toHaveStyle("color: #20374b");
  });

  it("should not render the email when it is not provided", () => {
    render(<Contact {...defaultProps} email={undefined} />);
    const emailElement = screen.queryByText("jane@hotmail.com");
    expect(emailElement).toBeNull();
  });

  it("should have listitem role", () => {
    render(<Contact {...defaultProps} />);
    const container = screen.getByRole("listitem");
    expect(container).toBeInTheDocument();
  });

  it("should have correct background on hover", () => {
    render(<Contact {...defaultProps} />);
    const container = screen.getByRole("listitem");
    expect(container).toHaveStyle("background: #ffffff");
  });

  it("should have correct background on active", () => {
    render(<Contact {...defaultProps} />);
    const container = screen.getByRole("listitem");
    expect(container).toHaveStyle("background: #ffffff");
  });
});
