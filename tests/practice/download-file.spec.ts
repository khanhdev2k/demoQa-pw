import { Page, test,expect } from "@playwright/test";

test( "Download file advance", async ({page}) => {
    await page.goto("https://material.playwrightvn.com/021-import-export.html")
    const downloadPromise = page.waitForEvent("download");
    await page.locator("#exportButton").click();

    const download = await downloadPromise;
    download.saveAs("playwright-base/data/downloadFile" + download.suggestedFilename());
    
})