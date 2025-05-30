// e2e/pageObjects/classSelectionPage.ts
import { Page } from '@playwright/test';

/**
 * Page Object for the class selection page.
 * Contains locators and common URLs for this page.
 */
export class ClassSelectionPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Common URLs
    static readonly HOME_URL = '/';
    static readonly GUARDIAN_TALENT_URL_REGEX = /.*\/class\/guardian/;
    static readonly ALCHEMIST_TALENT_URL_REGEX = /.*\/class\/alchemist/;
    static readonly SHADOW_TALENT_URL_REGEX = /.*\/class\/shadow/;
    static readonly HUNTER_TALENT_URL_REGEX = /.*\/class\/hunter/;
    static readonly MAGE_TALENT_URL_REGEX = /.*\/class\/mage/;

    // Locator for the web-version grid container
    private get webGrid() {
        return this.page.getByTestId('desktop-class-grid');
    }

    // Locators for class links on the selection page (scoped to webGrid)
    getClassLink(classId: string) {
        return this.webGrid.getByTestId(`class-link-${classId}`);
    }

    getClassIcon(classId: string) {
        return this.webGrid.getByTestId(`class-icon-${classId}`);
    }

    getClassLabel(classId: string) {
        return this.webGrid.getByTestId(`class-label-${classId}`);
    }

    // (Optional) можно добавить mobileGrid для мобильных тестов
    // private get mobileGrid() {
    //     return this.page.getByTestId('mobile-class-grid');
    // }
}