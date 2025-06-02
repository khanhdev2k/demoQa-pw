import {test, expect} from "@playwright/test";
import { WebTable } from "../pages/web-table";
import * as testData from '../data/test-data.json'

test.describe("DemoQA with webtable ", ()=> {
    let webtable: WebTable;

    test.beforeEach( async ({page}) => {
        webtable = new WebTable(page);
        await webtable.gotoWebTable();
    })

    test('TC_001 - Add people onto webtable ', async ()=> {
        webtable.clickBtnAdd();
        webtable.elementIsVisible();
        webtable.inputFormSuccessfully();
    })
    
})