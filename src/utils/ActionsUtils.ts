import { expect, Locator, Page } from "@playwright/test";

export class ActionsUtils {
    constructor(page: Page) { }

    async hoverToElement(element: Locator) {
       await element.hover();
    }
}