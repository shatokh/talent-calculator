import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	// указываем директорию со сценариями
	testDir: 'e2e',
	timeout: 30_000,
	retries: 2,
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
