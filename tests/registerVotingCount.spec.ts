import { test, expect } from "@playwright/test";
import { AdminPage } from "./pages/adminPage";
import { ElectionOverviewPage } from "./pages/electionOverviewPage";
import { ExtraOnderzoekPage } from "./pages/registerVotingCount/extraOnderzoekPage";
import { VerschillenMetStembureauPage } from "./pages/registerVotingCount/verschillenMetStembureauPage";
import { ApiHelper } from "./helpers/apiHelper";

test('Invoerder 1 can successfully register a voting count', async({ page, request}) => {

    var adminPage = new AdminPage(page);
    await adminPage.open();
    await adminPage.loginAs('Invoerder 1');
    await adminPage.selectElection('Gemeenteraad 2026');

    await new ApiHelper(page, request).deletePollingForStation(4, 1);

    var electionOverviewPage = new ElectionOverviewPage(page);
    await expect(electionOverviewPage.header).toHaveText('Gemeenteraad 2026');
    await electionOverviewPage.selectAvailablePollingStation('1');

    // Telling vastleggen
    await new ExtraOnderzoekPage(page).complete();
    // await new VerschillenMetStembureauPage(page).complete();    
});