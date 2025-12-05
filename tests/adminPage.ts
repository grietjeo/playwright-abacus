import { Page } from "@playwright/test";

/**
 * iets doms
 */
export class AdminPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

   async open() {
        await this.page.goto('https://kandidaat-aanduiding-lijsten.abacus-test.nl');
    }

    async loginAsAdmin(role: string) {
        await this.page.getByRole('link', {name: role }).click();
    }

    /**
     * selecteer een verkiezing 
     * @param election de verkiezing die je wilt selecteren
     */
    async selectElection(election: string) {
        await this.page.getByRole('link', {name: election}).click();
    }
}