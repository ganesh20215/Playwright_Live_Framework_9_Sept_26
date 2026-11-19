import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class SelfRegisterPage extends BasePage {

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly emailAddress: Locator;
    readonly createPassword: Locator;
    readonly confirmPassword: Locator;
    readonly registerBtn : Locator;


    constructor(page: Page) {
        super(page);
        this.firstName = page.locator("//input[@data-id='firstName']");
        this.lastName = page.locator("//input[@data-id='lastName']");
        this.emailAddress = page.locator("//input[@data-id='email']");
        this.createPassword = page.locator("//input[@data-id='password']");
        this.confirmPassword = page.locator("//input[@data-id='confirmPassword']");
        this.registerBtn = page.getByText('Register');
    }

    async createAccount(password: string) {
        await this.commonUtil.fillInput(this.firstName, this.randomUtil.genrateRandomString(10));
        await this.page.waitForTimeout(2000);
        await this.commonUtil.fillInput(this.lastName, this.randomUtil.genrateRandomString(10));
        await this.page.waitForTimeout(2000);

        // await this.commonUtil.fillInput(this.emailAddress, this.randomUtil.generateRandomEmail());
        await this.emailAddress.pressSequentially(this.randomUtil.generateRandomEmail());
        await this.page.waitForTimeout(2000);

        await this.commonUtil.fillInput(this.createPassword, password);
        await this.page.waitForTimeout(2000);
        await this.commonUtil.fillInput(this.confirmPassword, password);
        await this.page.waitForTimeout(2000);
        await this.commonUtil.clickOnElement(this.registerBtn);
        await this.page.waitForTimeout(10000);
    }

}