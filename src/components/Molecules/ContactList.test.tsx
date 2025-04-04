import React from "react";
import { render, screen } from "@testing-library/react";
import { ContactList } from "./ContactList";
import { ContactProps } from "../Atoms/Contact";

const baseContact: Omit<ContactProps, "id"> = {
  name: "",
  image: "",
  enabled: false,
};

const contactsData: ContactProps[] = [
  {
    ...baseContact,
    name: "John Doe",
    image: "https://example.com/john.jpg",
    enabled: true,
  },
  {
    ...baseContact,
    name: "Jane Smith",
    image: "https://example.com/jane.png",
    enabled: true,
  },
  {
    ...baseContact,
    name: "Peter Jones",
    image: "https://example.com/peter.jpeg",
    enabled: false,
  },
];

describe("ContactList", () => {
  it("should render without crashing", () => {
    const contacts: ContactProps[] = [];
    render(<ContactList contacts={contacts} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("should render the correct number of contacts", () => {
    render(<ContactList contacts={contactsData} />);
    const contactElements = screen.getAllByRole("listitem");
    expect(contactElements.length).toBe(contactsData.length);
  });

  it("should render each contact with the correct data", () => {
    render(<ContactList contacts={contactsData} />);
    contactsData.forEach((contact, index) => {
      const contactElement = screen.getAllByRole("listitem")[index];
      expect(contactElement).toHaveTextContent(contact.name);
    });
  });

  it("should not throw an error if the contacts prop is an empty array", () => {
    const contacts: ContactProps[] = [];
    const { container } = render(<ContactList contacts={contacts} />);
    const contactElements = container.querySelectorAll('[role="listitem"]');
    expect(contactElements.length).toBe(0);
  });
});
