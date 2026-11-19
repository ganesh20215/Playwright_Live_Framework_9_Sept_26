import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class HomePage extends BasePage {

    readonly acceptAllCookies: Locator;
    readonly firstAd: Locator;
    readonly userLogo: Locator;
    readonly shopLink: Locator;
    readonly newArrival: Locator;

    constructor(page: Page) {
        super(page);
        this.acceptAllCookies = page.locator('#onetrust-accept-btn-handler').first();
        this.firstAd = page.locator("button[class=' animation-finished']");
        this.userLogo = page.locator(".icon-menu").nth(1);
        this.shopLink = page.getByText('Shop').first();
        this.newArrival = page.getByText('New Arrivals');
    }

    public async acceptCookies() {
        await this.page.waitForTimeout(2000);
        await this.commonUtil.clickOnElement(this.acceptAllCookies);
        await this.page.waitForTimeout(2000);
        if (await this.firstAd.isVisible()) {
            await this.commonUtil.clickOnElement(this.firstAd);
        }
        
    }

    public async clickOnUserLogo() {
        await this.commonUtil.clickOnElement(this.userLogo);
        await this.page.waitForTimeout(2000);
    }

    public async selectShopOption() {
        await this.page.waitForTimeout(3000);
        await this.actionUtil.hoverToElement(this.shopLink);
        await this.page.waitForTimeout(2000);
        await this.commonUtil.clickOnElement(this.newArrival);
    }
}