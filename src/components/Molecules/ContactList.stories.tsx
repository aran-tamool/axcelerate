import type { Meta, StoryObj } from "@storybook/react";
import { ContactList } from "./ContactList";
import { ContactProps } from "../Atoms/Contact";

const meta = {
  title: "Molecules/ContactList",
  component: ContactList,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ContactList>;

export default meta;
type Story = StoryObj<typeof meta>;

const contacts: ContactProps[] = [
  {
    name: "Jane Doe",
    image: "./imgs/pfp.jpeg",
    enabled: false,
  },
  {
    name: "Jane Doe",
    image: "./imgs/pfp.jpeg",
    enabled: false,
  },
  {
    name: "Jane Doe",
    image: "./imgs/pfp.jpeg",
    email: "jane@hotmail.com",
    enabled: true,
  },
  {
    name: "Jane Doe",
    image: "./imgs/pfp.jpeg",
    enabled: false,
  },
  {
    name: "Jane Doe",
    image: "./imgs/pfp.jpeg",
    email: "jane@hotmail.com",
    enabled: false,
  },
];
export const Main: Story = {
  args: { contacts },
};
