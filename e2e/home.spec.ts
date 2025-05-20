import { test, expect } from '@playwright/test';

test('navigates from home to mage page', async ({ page }) => {
	await page.goto('/');
	await page.locator('a[href="/class/mage"] img').click();
	await expect(page).toHaveURL('/class/mage');
	await expect(page.locator('img[alt="Talent Mage"]')).toHaveAttribute(
		'src',
		'/images/talents/mage/mage1.png'
	);
});
