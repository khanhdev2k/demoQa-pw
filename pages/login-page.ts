import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly url: string = 'https://opensource-demo.orangehrmlive.com/';
  readonly usernameInput = 'input[name="username"]';
  readonly passwordInput = 'input[name="password"]';
  readonly loginButton = 'button[type="submit"]';
  readonly errorMessage = '.oxd-alert-content-text';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async verifyErrorMessage(expectedMessage: string) {
    const error = await this.page.locator(this.errorMessage).textContent();
    await expect(error).toContain(expectedMessage);
  }
}