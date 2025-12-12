import { APIRequestContext, expect, Page } from "@playwright/test";

export class ApiHelper {

    private readonly page: Page;
    private readonly request: APIRequestContext;

    constructor(page: Page, request: APIRequestContext) {
        this.page = page;
        this.request = request;
    }

    async deletePollingForStation(station: number, polling: number) {

        var userAgent = await this.page.evaluate('navigator.userAgent');

        var cookies = await this.page.context().cookies();
        var sessionCookie = cookies.find(x => x.name == 'ABACUS_SESSION');

        var response = await this.request.delete(`https://centraal-personen-afdeling.abacus-test.nl/api/polling_stations/${station}/data_entries/${polling}`, {
            headers: {
                'User-Agent': userAgent,
                'Cookie': `ABACUS_SESSION=${sessionCookie?.value}`
            }
        })

        var statusCode = response.status();
        expect(statusCode === 204 || statusCode === 409).toBeTruthy();
    }
}