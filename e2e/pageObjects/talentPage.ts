// e2e/pageObjects/talentPage.ts
import { Page } from '@playwright/test';

/**
 * Page Object для страницы талантов.
 * Содержит локаторы для элементов, специфичных для страницы талантов.
 */
export class TalentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Локатор для кнопки "назад"
  getGoBackButton() {
    return this.page.getByTestId('go-back-button');
  }

  // Локатор для изображения таланта Алхимика
  getAlchemistTalentImage() {
    return this.page.locator('img[src*="/images/talents/alchemist/alchemist1.png"]');
  }

  // Локатор для изображения таланта Стража
  getGuardianTalentImage() {
    return this.page.locator('img[src*="/images/talents/guardian/guardian1.png"]');
  }

  // Локатор для изображения таланта Тени
  getShadowTalentImage() {
    return this.page.locator('img[src*="/images/talents/shadow/shadow1.png"]');
  }

  // Локатор для изображения таланта Охотника
  getHunterTalentImage() {
    return this.page.locator('img[src*="/images/talents/hunter/hunter1.png"]');
  }

  // Локатор для изображения таланта Мага
  getMageTalentImage() {
    return this.page.locator('img[src*="/images/talents/mage/mage1.png"]');
  }
}
