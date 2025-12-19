import { Page } from "@playwright/test";

export class PartijTellingPage {

    private readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async completeWithVotes(numberOfVotes: number) {
        await this.page.locator('#data\\.political_group_votes\\[0\\]\\.candidate_votes\\[0\\]\\.votes').fill(String(numberOfVotes));
        await this.page.locator('#data\\.political_group_votes\\[0\\]\\.total').fill(String(numberOfVotes));
        await this.page.getByRole('button', { name: 'Volgende' }).click();
    }

    async completeWithoutVotes() {
        await this.page.getByRole('button', { name: 'Volgende' }).click();
    }
}