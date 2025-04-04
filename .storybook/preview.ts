import type { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [
    (Story) => {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
      return Story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: 'dark', // Set the default background
      values: [
        {
          name: 'light',
          value: '#ffffff', // White background
        },
        {
          name: 'dark',
          value: '#333333', // Dark grey background
        },
        {
          name: 'blue',
          value: '#1e90ff', // Blue background
        },
      ],
    },
  },
};

export default preview;