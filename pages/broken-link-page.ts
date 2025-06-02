import {Page, expect} from '@playwright/test'
import { logger } from '../config/constants';
import { BASE_URL_DEMOQA } from '../global-constants';

export class BrokenLink {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(BASE_URL_DEMOQA + "broken");
    }

    async getLinkFromElement() {
        logger.log("Action with link element");
        let normalLink = await this.page.getByRole('link', {name: "Click Here for Valid Link"}).click();
        // let brokenLink = await this.page.getByRole('link', {name: "Click Here for Broken Link"});
        console.log(normalLink);
    }
}