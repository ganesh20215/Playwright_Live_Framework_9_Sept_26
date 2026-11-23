import accountCreation from "../test-data/accountCreation.json";
import { test } from "../src/fixtures/TestFixture";


test(`Verify account creation with valid data - ${accountCreation.validAccountCreation}`, {tag : ['@smoke']}, async({homePage, loginPage, selfRegisterPage})=>{
    await homePage.acceptCookies();
    await homePage.clickOnUserLogo();
    await loginPage.clickOnCreateAnAccountLink();
    await selfRegisterPage.createAccount(accountCreation.validAccountCreation.password);
})