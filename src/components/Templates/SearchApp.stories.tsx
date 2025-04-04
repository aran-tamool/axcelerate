import { Meta, StoryObj } from "@storybook/react";
import { SearchApp } from "./SearchApp"; // Adjust the import path
import { Provider } from "react-redux";
import { store } from "@/store";

const meta: Meta<typeof SearchApp> = {
  title: "Templates/SearchApp",
  component: SearchApp,
  argTypes: {},
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SearchApp>;

export const Default: Story = {
  args: {},
};
