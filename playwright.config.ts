// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Перед запуском тестов Playwright стартует Vite dev-сервер
  webServer: {
    command: 'npm run dev -- --port 5173',
    port: 5173,
    reuseExistingServer: true,   // локально не перезапускает, в CI стартит
    timeout: 60 * 1000           // ждёт до 60 с
  },

  // Общие настройки тестов
  testDir: 'e2e',
  timeout: 30_000,
  retries: 1,

  use: {
    baseURL: 'http://localhost:5173',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5_000,
    ignoreHTTPSErrors: true
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
