import { test } from '@playwright/test';

test.beforeAll(async () => {
    // ...
});

test.afterAll(async () => {
    // ...
});

test.beforeEach(async ({ page }) => {
    await page.goto('https://...');
  });

test.afterEach(async ({ page }) => {
    // ...
});

test('first', async ({ page }) => {
    // ...
});

test('second', async ({ page }) => {
    // ...
});