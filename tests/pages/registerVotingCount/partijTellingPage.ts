import { Page } from "@playwright/test";
import { PartijTelling } from "../../models/partijTelling";

export class PartijTellingPage {

    private readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async completeWithVotes(telling: PartijTelling) {
        for(var candidate of telling.candidates) {
            await this.page.locator(`#data\\.political_group_votes\\[0\\]\\.candidate_votes\\[${candidate.index}\\]\\.votes`).fill(String(candidate.votes));
        }
        await this.page.locator('#data\\.political_group_votes\\[0\\]\\.total').fill(String(telling.totalVotes));
        await this.page.getByRole('button', { name: 'Volgende' }).click();
    }
    
    async completeWithoutVotes() {
        await this.page.getByRole('button', { name: 'Volgende' }).click();
    }
}