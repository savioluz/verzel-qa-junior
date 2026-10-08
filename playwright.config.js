const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 45000,

  expect: {
    timeout: 10000,
  },

  use: {
    baseURL: 'https://verzel-store.qa-test-verzel-store.workers.dev',

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 10000,

    navigationTimeout: 15000,
  },

  reporter: [
    ['list'],

    ['html', {
      open: 'never'
    }],

    ['json', {
      outputFile: 'playwright-results.json'
    }]
  ],

  projects: [
    {
      name: 'chromium',

      use: {
        browserName: 'chromium',
      },
    },
  ],
});
