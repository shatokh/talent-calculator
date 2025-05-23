// e2e/hunter.spec.ts
import { test, expect } from '@playwright/test';
import { ClassSelectionPage } from './pageObjects/classSelectionPage'; // Импортируем Page Object для страницы выбора классов
import { TalentPage } from './pageObjects/talentPage'; // Импортируем Page Object для страницы талантов

// Описываем группу тестов для страницы класса Охотника
test.describe('Hunter Class Page', () => {
	// Тест: Переход на страницу Охотника и проверка возврата на стартовую страницу
	test('should navigate to Hunter page and then go back to home', async ({ page }) => {
		// Arrange: Создаем экземпляры Page Objects
		const classSelectionPage = new ClassSelectionPage(page);
		const talentPage = new TalentPage(page);

		// 1. Открываем базовую страницу, используя URL из Page Object
		await page.goto(ClassSelectionPage.HOME_URL);

		// 2. Находим ссылку для "Охотника" через Page Object
		const hunterLink = classSelectionPage.getClassLink('hunter');

		// Проверяем, что ссылка существует и видна.
		await expect(hunterLink).toBeVisible();

		// Act: Кликаем по ссылке и ОДНОВРЕМЕННО ожидаем, что URL страницы изменится
		await Promise.all([
			page.waitForURL(ClassSelectionPage.HUNTER_TALENT_URL_REGEX, { timeout: 20000 }), // Ожидаем URL через Page Object
			hunterLink.click()
		]);

		// Assert: Проверяем, что текущий URL страницы действительно соответствует ожидаемому
		await expect(page).toHaveURL(ClassSelectionPage.HUNTER_TALENT_URL_REGEX);

		// Assert: Ожидаем, пока изображение таланта Охотника появится в DOM и станет видимым
		// Используем локатор из Page Object, который был исправлен на 'hunter1.png'
		const hunterTalentImage = talentPage.getHunterTalentImage();
		await expect(hunterTalentImage).toBeVisible({ timeout: 20000 });

		// Act: Находим кнопку "назад" через Page Object и кликаем по ней
		const goBackButton = talentPage.getGoBackButton();

		// Проверяем, что кнопка "назад" существует и видна
		await expect(goBackButton).toBeVisible();

		// Act: Кликаем по кнопке "назад" и ОДНОВРЕМЕННО ожидаем возврата на стартовую страницу
		await goBackButton.click();
		// Ждём, что URL изменился на "/"
		await expect(page).toHaveURL(ClassSelectionPage.HOME_URL);

		// Assert: Проверяем, что текущий URL страницы действительно корневой
		await expect(page).toHaveURL(ClassSelectionPage.HOME_URL);

		// Assert: Дополнительная проверка: убедимся, что элементы стартовой страницы снова видны.
		// Например, снова проверим ссылку "Охотник" через Page Object.
		await expect(hunterLink).toBeVisible();
	});
});
