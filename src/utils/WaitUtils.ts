import { expect, Locator, Page } from "@playwright/test";

export class WaitUtils {
    constructor(page: Page) { }

    async waitForElement(element: Locator) {
        await element.waitFor({
            state: 'visible'
        });
    }

    async waitForElementHidden(element: Locator) {
        await element.waitFor({
            state: 'hidden'
        });
    }
}