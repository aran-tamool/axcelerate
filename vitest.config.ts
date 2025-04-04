import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig({
  test: {
    workspace: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for Storybook components
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          environment: 'jsdom', // Use jsdom instead of browser
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
