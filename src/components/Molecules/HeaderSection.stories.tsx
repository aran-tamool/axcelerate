import { Meta, StoryObj } from "@storybook/react";
import { HeaderSection, HeaderSectionProps } from "./HeaderSection"; // Adjust the import path

const meta: Meta<HeaderSectionProps> = {
  title: "Molecules/HeaderSection",
  component: HeaderSection,
  argTypes: {
    title: { control: "text" },
    expanded: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<HeaderSectionProps>;

export const Default: Story = {
  args: {
    title: "Section Title",
    expanded: false,
  },
};

export const Expanded: Story = {
  args: {
    title: "Expanded Section",
    expanded: true,
  },
};

export const Collapsed: Story = {
  args: {
    title: "Collapsed Section",
    expanded: false,
  },
};
