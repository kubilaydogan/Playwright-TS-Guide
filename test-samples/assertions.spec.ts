import { test, expect } from '@playwright/test';

test('Assertion samples', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/');

    // check element is present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);

    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click()
    }

    // check if element is hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    // check if element is enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    // check element match text or not
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCD')

    // check attribute value
    await expect(page.locator('selector')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect(page.locator('selector')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('selector')).toHaveClass(/.*css-dpmy2a/);

    // check page url and title
    await expect(page).toHaveURL(/kitchen.applitools.com/);
    await expect(page).toHaveTitle(/.*Kitchen/); // Expect a title "to contain" a substring

    // Visual Validation
    await expect(page).toHaveScreenshot();
});