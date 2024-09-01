import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.beforeEach(async ({ page }) => {
  // const loginPage = new LoginPage(page)
  // await loginPage.goToLoginPage();

  await new LoginPage(page).goToLoginPage();
});

test('Login Test with page object', async ({ page }) => {  
  const loginPage = new LoginPage(page)
  const userName = process.env.USERNAME as string;
  const password = process.env.PASSWORD as string;
  
  await loginPage.login(userName, password);
  await loginPage.verifySuccessfulLogin();    // option 1
  await loginPage.verifyTitle('Products');    // option 2
  await loginPage.logout();
});

test('should not be able to login with a invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.login('standard_user', 'invalidPassword');
  await loginPage.verifyLoginFailMessage();
  await page.waitForTimeout(3000);    // for demo purposes
});



test.skip('Login test without page object usage', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // logout
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});