import loginData from "../test-data/login.json";
import { test } from "../src/fixtures/TestFixture";
import { expect } from "@playwright/test";


test(`Verify login with valid credential - ${loginData.validUser}`, async({homePage, loginPage})=>{
    await homePage.acceptCookies();
    await homePage.clickOnUserLogo();
    await loginPage.setLogin(loginData.validUser.email, loginData.validUser.password);
})

test(`Verify login with invalid credential - ${loginData.invalidUser}`, async({homePage, loginPage})=>{
    await homePage.acceptCookies();
    await homePage.clickOnUserLogo();
    await loginPage.setLogin(loginData.invalidUser.email, loginData.invalidUser.password);
    expect(await loginPage.loginErrorMessage()).toBe(true);
})