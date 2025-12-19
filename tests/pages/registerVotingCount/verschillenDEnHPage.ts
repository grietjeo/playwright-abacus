import { Page } from "@playwright/test";

export class VerschillenDEnHPage {

    private readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async complete() {
        await this.page.locator('#differences_counts\\.compare_votes_cast_admitted_voters\\.admitted_voters_equal_votes_cast').click();
        await this.page.getByRole('button', { name: 'Volgende' }).click();
    }
}