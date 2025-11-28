import { test, expect } from '@playwright/test';

test('admin can login', async ({ page }) => {
 
    await page.goto('https://staten-briefstembureau-bepalingen.abacus-test.nl');

    await page.locator('css=input[name=username]').fill(process.env.ABACUS_USERNAME);
    await page.locator('css=input[name=password]').fill(process.env.ABACUS_PASSWORD);
    await page.getByRole('button', { name: 'Inloggen'}).click();

    await expect(page.locator('css=strong[id=navbar-username]')).toHaveText('Jan van Dam');

});
