import { Page, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly userDropdown = '.oxd-userdropdown';
  readonly logoutLink = 'a[href="/web/index.php/auth/logout"]';

  constructor(page: Page) {
    this.page = page;
  }

  async verifyDashboardVisible() {
    await expect(this.page.locator(this.userDropdown)).toBeVisible();
  }

  async logout() {
    await this.page.click(this.userDropdown);
    await this.page.click(this.logoutLink);
  }
}