import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CardPage extends BasePage {

    readonly deleteCard: Locator;

    constructor(page: Page) {
        super(page);
        this.deleteCard = page.getByText("Delete");
    }

    public async deleteCardOption() {
        await this.page.waitForTimeout(2000);
        await this.commonUtil.clickOnElement(this.deleteCard);
    }
}