import { expect, Locator, Page } from "@playwright/test";

export class CommonUtils {
    constructor(page : Page) { }

    async clickOnElement(element: Locator) {
        await expect(element).toBeVisible();
        await element.click();
    }

    async fillInput(element: Locator, value: string) {
        await expect(element).toBeVisible();
        await element.fill(value);
    }

    async getText(element: Locator) {
        await expect(element).toBeVisible();
        await element.innerText();
    }

    async isElementVisible(element: Locator): Promise<boolean> {

        return await element.isVisible();
    }
}