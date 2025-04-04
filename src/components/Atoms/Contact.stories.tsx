import type { Meta, StoryObj } from "@storybook/react";
import { Contact } from "./Contact";

const meta = {
  title: "Atoms/Contact",
  component: Contact,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    name: "Jane Doe",
    email: "jane@hotmail.com",
    image: "./imgs/pfp.jpeg",
    enabled: false,
  },
};
