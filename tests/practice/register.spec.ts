import { expect,test } from "@playwright/test";
import { RegisterPage } from "../../pages/pratice/register-page";

test.describe('Flow register page', async () => {
    let register: RegisterPage;
    test.beforeEach( async ({page}) => {
        register = new RegisterPage(page);
        await register.goto();
    })


    test('register test', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto();
        await registerPage.navtoRegister();
        await registerPage.inputInforUser();
    });


    test.afterEach(async ({ page }) => {
        await page.close();
    });

})