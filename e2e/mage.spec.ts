// e2e/guardian.spec.ts
import { test, expect } from '@playwright/test';
import { ClassSelectionPage } from './pageObjects/classSelectionPage'; // Импортируем Page Object для страницы выбора классов
import { TalentPage } from './pageObjects/talentPage';             // Импортируем Page Object для страницы талантов

// НОВЫЙ ТЕСТ: Переход на страницу Мага и проверка возврата на стартовую страницу
test.describe('Mage Class Page', () => {
  test('should navigate to Mage page and then go back to home', async ({ page }) => {
    // Arrange: Создаем экземпляры Page Objects
    const classSelectionPage = new ClassSelectionPage(page);
    const talentPage = new TalentPage(page);

    // 1. Открываем базовую страницу, используя URL из Page Object
    await page.goto(ClassSelectionPage.HOME_URL); 

    // 2. Находим ссылку для "Мага" через Page Object
    const mageLink = classSelectionPage.getClassLink('mage');
    
    // Проверяем, что ссылка существует и видна.
    await expect(mageLink).toBeVisible();

    // Act: Кликаем по ссылке и ОДНОВРЕМЕННО ожидаем, что URL страницы изменится
    await Promise.all([
      page.waitForURL(ClassSelectionPage.MAGE_TALENT_URL_REGEX, { timeout: 20000 }), // Ожидаем URL через Page Object
      mageLink.click() 
    ]);

    // Assert: Проверяем, что текущий URL страницы действительно соответствует ожидаемому
    await expect(page).toHaveURL(ClassSelectionPage.MAGE_TALENT_URL_REGEX);

    // Assert: Ожидаем, пока изображение таланта Мага появится в DOM и станет видимым
    const mageTalentImage = talentPage.getMageTalentImage(); // Используем локатор из Page Object
    await expect(mageTalentImage).toBeVisible({ timeout: 20000 });

    // Act: Находим кнопку "назад" через Page Object и кликаем по ней
    const goBackButton = talentPage.getGoBackButton();
    
    // Проверяем, что кнопка "назад" существует и видна
    await expect(goBackButton).toBeVisible();

    // Act: Кликаем по кнопке "назад" и ОДНОВРЕМЕННО ожидаем возврата на стартовую страницу
    await Promise.all([
      page.waitForURL(ClassSelectionPage.HOME_URL, { timeout: 10000 }), // Ожидаем URL через Page Object
      goBackButton.click()
    ]);

    // Assert: Проверяем, что текущий URL страницы действительно корневой
    await expect(page).toHaveURL(ClassSelectionPage.HOME_URL);

    // Assert: Дополнительная проверка: убедимся, что элементы стартовой страницы снова видны.
    // Например, снова проверим ссылку "Маг" через Page Object.
    await expect(mageLink).toBeVisible();
  });
});