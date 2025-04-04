import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AttendingList } from "./AttendingList";
import { ContactProps } from "../Atoms/Contact";

const contacts: ContactProps[] = [
  {
    name: "Jane Doe",
    image: "/pfp.jpeg",
    enabled: false,
  },
  {
    name: "John Smith",
    image: "/pfp.jpeg",
    enabled: true,
    email: "john@example.com",
  },
];

describe("AttendingList", () => {
  it("renders Attending list correctly", () => {
    render(<AttendingList contacts={contacts} listType="Attending" />);
    expect(screen.getByText("Attending")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBe(2);
  });

  it("renders Absent list correctly", () => {
    render(<AttendingList contacts={contacts} listType="Absent" />);
    expect(screen.getByText("Absent")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBe(2);
  });

  it("collapses and expands the list", () => {
    render(<AttendingList contacts={contacts} listType="Attending" />);
    expect(screen.getAllByRole("listitem").length).toBe(2);
    fireEvent.click(screen.getByText("Attending"));
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Attending"));
    expect(screen.getAllByRole("listitem").length).toBe(2);
  });

  it("renders without crashing with empty contacts", () => {
    render(<AttendingList contacts={[]} listType="Attending" />);
    expect(screen.getByText("Attending")).toBeInTheDocument();
  });
});
