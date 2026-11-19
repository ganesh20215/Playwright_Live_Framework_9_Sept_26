import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class LoginPage extends BasePage {

    readonly emailIdTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginBtn: Locator;
    readonly invalidLoginErrorMessage : Locator;
    readonly createAccountLink : Locator;


    constructor(page: Page) {
        super(page);
        this.emailIdTextBox = page.locator("//input[@data-id='inputUsername']");
        this.passwordTextBox = page.locator("//input[@data-id='inputPassword']");
        this.loginBtn = page.getByText("Login");
        this.invalidLoginErrorMessage = page.getByText('Incorrect email or password. Please try again');
        this.createAccountLink = page.getByText('Create an Account')

    }

    public async setLogin(userName: string, password: string) {
        await this.commonUtil.fillInput(this.emailIdTextBox, userName);
        await this.page.waitForTimeout(2000);
        await this.commonUtil.fillInput(this.passwordTextBox, password);
        await this.page.waitForTimeout(2000);
        await this.commonUtil.clickOnElement(this.loginBtn);
        await this.page.waitForTimeout(3000);
    }

    public async loginErrorMessage() : Promise<boolean>{
       return await this.commonUtil.isElementVisible(this.invalidLoginErrorMessage);
    }

    public async clickOnCreateAnAccountLink(){
        await this.commonUtil.clickOnElement(this.createAccountLink)
        await this.page.waitForTimeout(2000);
    }
}