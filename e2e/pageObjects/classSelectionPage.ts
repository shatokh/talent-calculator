// e2e/pageObjects/classSelectionPage.ts
import { Page } from '@playwright/test';

/**
 * Page Object для страницы выбора классов.
 * Содержит локаторы и общие URL-ы для этой страницы.
 */
export class ClassSelectionPage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	// Общие URL-ы
	static readonly HOME_URL = '/';
	static readonly GUARDIAN_TALENT_URL_REGEX = /.*\/class\/guardian/;
	static readonly ALCHEMIST_TALENT_URL_REGEX = /.*\/class\/alchemist/;
	static readonly SHADOW_TALENT_URL_REGEX = /.*\/class\/shadow/;
	static readonly HUNTER_TALENT_URL_REGEX = /.*\/class\/hunter/;
	static readonly MAGE_TALENT_URL_REGEX = /.*\/class\/mage/;

	// Локаторы для ссылок классов на странице выбора
	getClassLink(classId: string) {
		return this.page.getByTestId(`class-link-${classId}`);
	}

	getClassIcon(classId: string) {
		return this.page.getByTestId(`class-icon-${classId}`);
	}

	getClassLabel(classId: string) {
		return this.page.getByTestId(`class-label-${classId}`);
	}
}
