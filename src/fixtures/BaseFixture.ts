import { test as base, expect } from "@playwright/test";
import { config } from "../../config/env.config";


export const test = base.extend({
    page : async ({page}, use) =>{
        await page.goto(config.baseUrl);
        await use(page);
    }
});

export {expect};