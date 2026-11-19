import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductCategoryPage extends BasePage {

    readonly productOfNewArrival: Locator;
    readonly addToCart: Locator;
    readonly checkOutNow: Locator;

    constructor(page: Page) {
        super(page);
        this.productOfNewArrival = page.locator(".product-image-container").first();
        this.addToCart = page.getByText('Add to Cart');
        this.checkOutNow = page.getByText('Checkout Now');
    }

    public async clickOnProductNewArrival() {
        await this.page.waitForTimeout(5000);
        await this.commonUtil.clickOnElement(this.productOfNewArrival);
        await this.page.waitForTimeout(2000);
        await this.commonUtil.clickOnElement(this.addToCart);
        await this.page.waitForTimeout(4000);
        await this.commonUtil.clickOnElement(this.checkOutNow);
    }
}