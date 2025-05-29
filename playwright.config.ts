import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    browserName: 'chromium', // Use Chrome
    headless: false, // Show the browser (good for debugging)
    screenshot: 'on', // Take screenshots on test failure
    trace: 'on', // Record traces for debugging
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});