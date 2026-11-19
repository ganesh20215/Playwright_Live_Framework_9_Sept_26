
import { test } from "../src/fixtures/TestFixture";
import { expect } from "@playwright/test";


test(`Verify user add to card -`, async({homePage, cardPage, productCategoryPage})=>{
    await homePage.acceptCookies();
    await homePage.selectShopOption();
    await productCategoryPage.clickOnProductNewArrival();
    await cardPage.deleteCardOption();
})