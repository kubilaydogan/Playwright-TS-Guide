import { test, expect } from '@playwright/test';

// npx playwright test --grep "@smoke

test('basic test', {
  tag: '@smoke',
}, async ({ page }) => {
  // ...
});

test('another test @smoke', async ({ page }) => {
  // ...
});