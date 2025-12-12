import { Page } from "@playwright/test";

export class ExtraOnderzoekPage {

    private readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async complete() {
        await this.page.getByRole('button', { name: 'Volgende' }).click();
    }
}