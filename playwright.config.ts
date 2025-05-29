// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

const isCi = !!process.env.CI;

export default defineConfig({
  // Auto-start server
  webServer: {
    command: isCi
      ? 'npm run build && npm run preview -- --port 5173'
      : 'npm run dev -- --port 5173',
    port: 5173,
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },

  // Reporters
  reporter: [
    ['list'],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],

  // General test settings
  testDir: 'e2e',
  timeout: 30_000,
  retries: isCi ? 1 : 0,

  use: {
    baseURL: 'http://localhost:5173',
    headless: isCi,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5_000,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retry-with-video',
  },

  // Projects (Chromium only in CI)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
