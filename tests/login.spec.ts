import { test, expect } from '@playwright/test';
import { AdminPage } from './pages/adminPage';
import { ElectionOverviewPage } from './pages/electionOverviewPage';


const roles = [
    {name: 'Beheerder 1'},
    {name: 'Coördinator 1'},
    {name: 'Invoerder 1'}
]

for (var role of roles) {
  
test(`Role ${role.name} can login`, async ({ page }) => {
 
    var adminPage = new AdminPage(page);
    await adminPage.open();

    await adminPage.loginAs(role.name);
    
    await adminPage.selectElection('Gemeenteraad 2026');

    await expect(new ElectionOverviewPage(page).header).toHaveText('Gemeenteraad 2026');


  

});
}




