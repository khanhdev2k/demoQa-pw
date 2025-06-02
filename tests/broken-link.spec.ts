import {test, expect} from "@playwright/test";
import * as testData from "../data/test-data.json"
import { BrokenLink } from "../pages/broken-link-page";

test.describe("Action test with broken link", async() => {
    let brokenLink: BrokenLink ;
    test.beforeEach(async({page}) => {
        brokenLink = new BrokenLink(page);
        await brokenLink.goto();
    })

    test("Get link", async ()=> {
        await brokenLink.getLinkFromElement();
    })
})
