import { expect, Locator, Page } from "@playwright/test";

export class ElectionOverviewPage {

    private readonly page: Page;

    public readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = this.page.locator('xpath=//h1');
    }

    async selectAvailablePollingStation(station: string) {
        await this.page.locator('#pollingStation').fill(station);
        await expect(this.page.locator('#pollingStationSelectorFeedback > div')).toHaveText('1e invoer');
        await this.page.getByRole('button', {name: 'Beginnen'}).click();
    }
}