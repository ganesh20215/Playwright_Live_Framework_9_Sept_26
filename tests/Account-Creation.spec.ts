import accountCreation from "../test-data/accountCreation.json";
import { test } from "../src/fixtures/TestFixture";
import { expect } from "@playwright/test";


test(`Verify account creation with valid data - ${accountCreation.validAccountCreation}`, async({homePage, loginPage, selfRegisterPage})=>{
    await homePage.acceptCookies();
    await homePage.clickOnUserLogo();
    await loginPage.clickOnCreateAnAccountLink();
    await selfRegisterPage.createAccount(accountCreation.validAccountCreation.password);
})