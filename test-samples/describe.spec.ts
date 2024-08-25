import { test, expect } from '@playwright/test';

test.describe('Test Suite (optional)', () => {

    // test.beforeEach(async ({ page }) => {
    //     await page.goto('https://playwright.dev/');
    // })

    // test.afterEach(async ({ page }) => {
    //     await page.close();
    // })

    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`Running ${testInfo.title}`);
        await page.goto('https://playwright.dev/');
    });

    test.afterEach(async ({ page }, testInfo) => {
        await page.close();
        console.log(`Finished ${testInfo.title} with status:  ${testInfo.status}`);

        if (testInfo.status !== testInfo.expectedStatus)
            console.log(`Did not run as expected, ended up at ${page.url()}`);
    });

    test.skip('skip the test', async ({ page }) => {

    })

    test.fixme('test to be fixed', async ({ page }) => {
        // this test will also be skipped
    })

    test('test @login', async ({ page }) => {
        // tag can be used in the title
        // npx playwright test --grep "@login"
        console.log('login tag used')
    })

    test('has title', async ({ page }) => {
        await expect(page).toHaveTitle(/Playwright/);
    });

    test.only('get started link', async ({ page }) => {
        await page.getByRole('link', { name: 'Get started' }).click();
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });

})