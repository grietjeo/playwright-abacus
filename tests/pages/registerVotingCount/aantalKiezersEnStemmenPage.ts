import { Page } from "@playwright/test";

export class AantalKiezersEnStemmenPage {

    private readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async complete(votes: number) {
        await this.page.locator('#data\\.voters_counts\\.poll_card_count').fill(String(votes));
        await this.page.locator('#data\\.voters_counts\\.total_admitted_voters_count').fill(String(votes));
        await this.page.locator('#data\\.votes_counts\\.political_group_total_votes\\[0\\]\\.total').fill(String(votes));
        await this.page.locator('#data\\.votes_counts\\.total_votes_candidates_count').fill(String(votes));
        await this.page.locator('#data\\.votes_counts\\.total_votes_cast_count').fill(String(votes));
        await this.page.getByRole('button', { name: 'Volgende' }).click();
    }
}