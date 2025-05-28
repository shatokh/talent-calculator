// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

const isCi = !!process.env.CI;

export default defineConfig({
  // Автозапуск сервера
  webServer: {
    command: isCi
      ? 'npm run build && npm run preview -- --port 5173'
      : 'npm run dev -- --port 5173',
    port: 5173,
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },

  // Репортеры
  reporter: [
    ['list'],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],

  // Общие настройки тестов
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

  // Проекты (только Chromium в CI)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
