import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { DashboardPage } from '../pages/dashboard-page';
import * as testData from '../data/test-data.json';

test.describe('OrangeHRM Login Tests', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.goto();
  });

  test('Login with valid credentials', async () => {
    const { username, password } = testData.validCredentials;
    await loginPage.login(username, password);
    await dashboardPage.verifyDashboardVisible();
    await dashboardPage.logout();
  });

  test('Login with invalid credentials', async () => {
    const { username, password } = testData.invalidCredentials;
    await loginPage.login(username, password);
    await loginPage.verifyErrorMessage('Invalid credentials');
  });
});