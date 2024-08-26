import { test, expect } from '@playwright/test';

test('deneme', async ({ page }) => {
  console.log("DENEME: " + process.env.USERNAME);
  
});