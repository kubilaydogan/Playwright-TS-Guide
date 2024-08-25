import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('#flash')).toHaveText(/You logged into a secure area!/)
});

test.only('Login with Page Objects @pom', async ({ page }, testInfo) => {
  const Login = new LoginPage(page)
  await Login.goToLoginPage();
  await Login.login('tomsmith', 'SuperSecretPassword!')

  await Login.verifyLoginMessage('You logged into a secure area!')
  // or
  await Login.verifySuccessfulLogin()
});

test('Login Test 2', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://example.com/login');

  // Fill in the login form
  await page.fill('#username', 'myusername');
  await page.fill('#password', 'mypassword');

  // Submit the form
  await page.click('#login-button');

  // Verify that the user is logged in
  const loggedInUser = await page.textContent('.user-profile');
  expect(loggedInUser).toBe('Welcome, myusername');
});