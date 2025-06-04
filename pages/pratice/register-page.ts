import { Page, expect, selectors } from "@playwright/test";
import { PRACTICE_BASE_URL } from "../../global-constants";
import { logger } from "../../config/constants";
import * as testData from '../../data/test-data.json';
import test from "node:test";
import { RegisterUI } from "../../page-UI/register-UI";

export class RegisterPage {
    readonly page: Page;

    constructor(page:Page) {
        this.page = page;
    }

    async goto(){
        await this.page.goto(PRACTICE_BASE_URL);
    }

    async navtoRegister() {   
        logger.log("Nav to register page");
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click()
        ]);
    }

    async waitForElement(locator: string) {
        logger.log(`Wait for Element: ${locator} visible`);
        return this.page.locator(locator).waitFor({ state: 'visible' });
    }

    async inputInforUser()
    {
        logger.log("Input the information of user");
        await this.waitForElement(RegisterUI.username);
        await this.page.locator(RegisterUI.username).fill(testData.dataUser.username);
        await this.waitForElement(RegisterUI.email);
        await this.page.locator(RegisterUI.email).fill(testData.dataUser.email);

        // check the radio button
        await this.waitForElement(RegisterUI.gender);
        await this.page.locator(RegisterUI.gender).check();
        await this.waitForElement(RegisterUI.hobbies);
        await this.page.locator(RegisterUI.hobbies).check();

        // select the option
        await this.waitForElement( RegisterUI.interest);
        await this.page.selectOption( RegisterUI.interest, testData.dataUser.interesting);
        await this.waitForElement( RegisterUI.country)
        await this.page.selectOption(RegisterUI.country, testData.dataUser.country);

        // input Day of birth
        await this.waitForElement( RegisterUI.dob)
        await this.page.fill( RegisterUI.dob, testData.dataUser.dateOfBirth)

        // input range
        await this.waitForElement(RegisterUI.rating);
        await this.page.fill( RegisterUI.rating, testData.dataUser.rate);

        // input favColor
        await this.waitForElement(RegisterUI.favColor);
        await this.page.fill(RegisterUI.favColor, testData.dataUser.colourFav);

        // Hover
        await this.waitForElement( RegisterUI.hover);
        await this.page.locator( RegisterUI.hover).hover();

        // toggle button
        await this.waitForElement( RegisterUI.toggleBtn);
        await this.page.locator( RegisterUI.toggleBtn).click();

        // start rating
        await this.waitForElement( RegisterUI.startRating);
        await this.page.locator( RegisterUI.startRating).evaluate( (el) => {
            el.setAttribute('data-rating', '3.0');
            el.style.setProperty( '--rating-width', '80%')
        });

        await this.page.locator( RegisterUI.submitBtn).click();
    }
}