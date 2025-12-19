import { expect, Page } from "@playwright/test";


export class AdminPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

   async open() {
        await this.page.goto('/');
    }

    async loginAs(role: string) {
        await this.page.getByRole('link', {name: role }).click();
    }

    /**
     * selecteer een verkiezing 
     * @param election de verkiezing die je wilt selecteren
     */
    async selectElection(election: string) {
        await this.page.getByRole('link', {name: election}).click();
    }

    async logout() {
        await this.page.getByRole('link', {name: 'Afmelden'}).click();
        await expect(this.page.getByRole('link', { name: 'Inloggen'})).toBeVisible();
    }
}