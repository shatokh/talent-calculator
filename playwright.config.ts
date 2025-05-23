// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

const isCi = !!process.env.CI;

export default defineConfig({
	// Automatically start the appropriate server before tests
	webServer: {
		command: isCi
			? 'npm run build && npm run preview -- --port 5173'
			: 'npm run dev -- --port 5173',
		port: 5173,
		reuseExistingServer: !isCi,
		timeout: 120 * 1000
	},

	// Reporters: console list + JUnit XML + HTML report
	reporter: [
		['list'],
		['junit', { outputFile: 'test-results/results.xml' }],
		['html', { outputFolder: 'playwright-report', open: 'never' }]
	],

	// Test suite settings
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
		video: 'retry-with-video'
	},

	// Only run Chromium in CI for speed
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		}
	]
});
