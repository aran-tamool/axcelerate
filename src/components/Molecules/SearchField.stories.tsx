import { Meta, StoryObj } from "@storybook/react";
import { SearchField } from "./SearchField"; // Adjust the import path

const meta: Meta<typeof SearchField> = {
  title: "Molecules/Search",
  component: SearchField,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: {},
};
