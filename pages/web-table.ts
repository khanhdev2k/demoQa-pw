import { Page, expect } from "@playwright/test"
import { BASE_URL_DEMOQA } from "../global-constants";

export class WebTable {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async gotoWebTable() {
        await this.page.goto(BASE_URL_DEMOQA);
    }

}