import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import * as testData from '../data/test-data.json';

test.describe('OrangeHRM Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Login with valid credentials', async () => {
    const { username, password } = testData.validCredentials;
    await loginPage.login(username, password);
  });

  test('Login with invalid credentials', async () => {
    const { username, password } = testData.invalidCredentials;
    await loginPage.login(username, password);
    await loginPage.verifyErrorMessage('Invalid credentials');
  });
});