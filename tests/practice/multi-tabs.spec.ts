import { Page, test, expect } from "@playwright/test";


test(" Implement test case with multiple tab", async ({page}) => {
    const url = "https://material.playwrightvn.com/06-new-tab.html";
    const linkYTB = "//ul[@class='links']/li[3]" 

    await page.goto(url);
    await page.locator(linkYTB).click();

    const page2 = await page.context().newPage()
    await page2.goto(url)
    await page2.locator("//ul[@class='links']/li[2]").click()
})