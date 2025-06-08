import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  workers: 3, // run 3 times in a test
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    browserName: 'chromium', // Use Chrome
    headless: true, // Show the browser (good for debugging)
    screenshot: 'on', // Take screenshots on test failure
    trace: 'on', // Record traces for debugging
    viewport: {width: 1920, height: 1080},
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});