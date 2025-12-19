import { Locator, Page } from "@playwright/test";

export class ControlerenEnOpslaanPage {

    private readonly page: Page;

    public readonly text: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.text = this.page.locator('#form-can-be-saved');
    }


    async complete() {
        await this.page.getByRole('button', { name: 'Opslaan' }).click();
    }
}