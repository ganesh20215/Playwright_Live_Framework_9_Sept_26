import { expect, Locator, Page } from "@playwright/test";

export class RandomUtils {
    constructor(page: Page) { }

    generateRandomNumber(min: number, max: number): number {
        return Math.floor(
            Math.random() * (max - min + 1)) + min;
    }


    genrateRandomString(no: number): string {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = "";

        for (let i = 0; i < no; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
        return result;
    }

    generateRandomEmail(): string {
        return `test${Date.now()}@gmail.com`
    }
}