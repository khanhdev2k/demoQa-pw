import { Page, expect } from "@playwright/test"
import { BASE_URL_DEMOQA } from "../global-constants";
import { WebTableUI } from "../page-UI/webtable-UI";
import * as testData from "../data/test-data.json"

export class WebTable {
    readonly page: Page;
    readonly addBtn = WebTableUI.addBtn;
    readonly modalContent = WebTableUI.modelContent;

    constructor(page: Page) {
        this.page = page;
    }

    async gotoWebTable() {
        await this.page.goto(BASE_URL_DEMOQA + "webtables");
        await this.page.setViewportSize({ width: 1920, height: 1080 });
    }

    async clickBtnAdd() {
        await this.page.click(this.addBtn);
    }

    async elementIsVisible(){
        await this.page.waitForSelector(this.modalContent, { state: 'visible', timeout: 10000 });
    }

    async inputFormSuccessfully() { 
        await this.page.fill( WebTableUI.registationForm.firstName, testData.registrationFrom.validUser.firstName);
        await this.page.fill( WebTableUI.registationForm.lastName, testData.registrationFrom.validUser.lastName);
        await this.page.fill( WebTableUI. registationForm.age, testData.registrationFrom.validUser.age);
        await this.page.fill( WebTableUI. registationForm.userEmail, testData.registrationFrom.validUser.email);
        await this.page.fill( WebTableUI. registationForm.salary, testData.registrationFrom.validUser.salary );
        await this.page.fill( WebTableUI. registationForm.department, testData.registrationFrom.validUser.department);
        await this.page.click( WebTableUI.registationForm.submitBtn)

    }

    async userValidOnTable() {
        await this.page.getByRole('textbox', { name: 'Type to search' }).fill(testData.registrationFrom.validUser.firstName);
    }


}