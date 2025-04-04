import type { Meta, StoryObj } from "@storybook/react";
import { AttendingList } from "./AttendingList";
import { ContactProps } from "../Atoms/Contact";

const meta = {
  title: "Organisms/AttendingList",
  component: AttendingList,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof AttendingList>;

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
export const Absent: Story = {
  args: { contacts, listType: "Absent" },
};
export const Attending: Story = {
  args: { contacts, listType: "Attending" },
};
