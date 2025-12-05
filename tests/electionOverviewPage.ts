import { Locator, Page } from "@playwright/test";

export class ElectionOverviewPage {

    private readonly page: Page;

    public readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = this.page.locator('xpath=//h1');
    }
}