import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Positive tests', () => {

    const userName = process.env.USERNAME as string;
    const password = process.env.PASSWORD as string;

    test.beforeEach(async ({ page }) => {
        await new LoginPage(page).goToLoginPage();
    });

    test('@login Test with page object', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.login(userName, password);
        await loginPage.verifySuccessfulLogin();
    });

    // to run this test separately, use the following command: 
    // npx playwright test --grep "@demo"
    test('playwright test @demo', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
        await page.getByRole('link', { name: 'Get started' }).click();
      
        // Verify page header
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
        await expect(page.locator('header h1')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Installation');
      });
})


test.describe('Negative tests', () => {

    test.beforeEach(async ({ page }) => {
        await new LoginPage(page).goToLoginPage();
    });

    test('User should not be able to @login with a invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.login('standard_user', 'invalidPassword');
        await loginPage.verifyLoginFailMessage();
        await page.waitForTimeout(2000);    // for demo purposes
    });
})