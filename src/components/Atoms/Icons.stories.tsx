import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ChevronRight, ChevronDown, SearchIcon } from "./Icons";
const meta: Meta<typeof ChevronRight> = {
  title: "Atoms/Icons/Chevron",
  argTypes: {
    fill: { control: "color" },
    size: { control: "number", defaultValue: 10 },
  },
};

export default meta;

type Story = StoryObj<typeof ChevronRight>;

export const Right: Story = {
  render: (args) => <ChevronRight {...args} />,
  args: {},
};

export const Down: Story = {
  render: (args) => <ChevronDown {...args} />,
  args: {},
};
export const Search: Story = {
  render: (args) => <SearchIcon {...args} />,
  args: {},
};
