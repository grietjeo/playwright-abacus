import { test, expect } from "@playwright/test";
import { AdminPage } from "./pages/adminPage";
import { ElectionOverviewPage } from "./pages/electionOverviewPage";
import { ExtraOnderzoekPage } from "./pages/registerVotingCount/extraOnderzoekPage";
import { VerschillenMetStembureauPage } from "./pages/registerVotingCount/verschillenMetStembureauPage";
import { ApiHelper } from "./helpers/apiHelper";
import { AantalKiezersEnStemmenPage } from "./pages/registerVotingCount/aantalKiezersEnStemmenPage";
import { VerschillenDEnHPage } from "./pages/registerVotingCount/verschillenDEnHPage";
import { PartijTellingPage } from "./pages/registerVotingCount/partijTellingPage";
import { ControlerenEnOpslaanPage } from "./pages/registerVotingCount/controlerenEnOpslaanPage";

test.beforeEach('Delete any existing voting counts', async({ page, request}) => {
    var adminPage = new AdminPage(page);
    await adminPage.open();
    await adminPage.loginAs('Coördinator 1');
    await adminPage.selectElection('Gemeenteraad 2026');
    await new ApiHelper(page, request).deletePollingForStation(4);
    await adminPage.logout();
})

test('Invoerder 1 can successfully register a voting count', async({ page, request}) => {

    var adminPage = new AdminPage(page);
    await adminPage.open();
    await adminPage.loginAs('Invoerder 1');
    await adminPage.selectElection('Gemeenteraad 2026');

    var electionOverviewPage = new ElectionOverviewPage(page);
    await expect(electionOverviewPage.header).toHaveText('Gemeenteraad 2026');
    await electionOverviewPage.selectAvailablePollingStation('1');

    // Telling vastleggen
    await new ExtraOnderzoekPage(page).complete();
    await new VerschillenMetStembureauPage(page).complete(); 
    await new AantalKiezersEnStemmenPage(page).complete(10);   
    await new VerschillenDEnHPage(page).complete(); 

    var partijTellingPage = new PartijTellingPage(page); 
    await partijTellingPage.completeWithVotes(10);
    await partijTellingPage.completeWithoutVotes();
    await partijTellingPage.completeWithoutVotes();
    await partijTellingPage.completeWithoutVotes();

    var controlerenEnOpslaanPage = new ControlerenEnOpslaanPage(page);
    await expect(controlerenEnOpslaanPage.text).toHaveText('Je kan de resultaten van dit stembureau opslaan');
    await controlerenEnOpslaanPage.complete();

    await expect(electionOverviewPage.confirmationCountSaved).toHaveText('Je invoer is opgeslagen');
    

});