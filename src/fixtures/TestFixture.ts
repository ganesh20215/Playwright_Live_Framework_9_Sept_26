import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SelfRegisterPage } from "../pages/SelfRegisterPage";
import { ProductCategoryPage } from "../pages/ProductCategoryPage";
import { CardPage } from "../pages/CardPage";
import { test as base, expect } from "./BaseFixture";


type TestFixture = {
    homePage: HomePage;
    loginPage: LoginPage;
    selfRegisterPage: SelfRegisterPage;
    cardPage: CardPage;
    productCategoryPage: ProductCategoryPage;
}

export const test = base.extend<TestFixture>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    selfRegisterPage: async ({ page }, use) => {
        await use(new SelfRegisterPage(page));
    },

    cardPage: async ({ page }, use) => {
        await use(new CardPage(page));
    },

    productCategoryPage: async ({ page }, use) => {
        await use(new ProductCategoryPage(page));
    }
});

