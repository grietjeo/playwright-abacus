import { Page } from "@playwright/test";

export class VerschillenMetStembureauPage {

    private readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async complete() {
        await this.page.locator('#counting_differences_polling_station\\.unexplained_difference_ballots_voters\\.no').click();
        await this.page.locator('#counting_differences_polling_station\\.difference_ballots_per_list\\.no').click();
        await this.page.getByRole('button', { name: 'Volgende' }).click();
    }
}