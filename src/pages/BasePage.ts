import { CommonUtils } from "../utils/CommonUtils";
import { WaitUtils } from "../utils/WaitUtils";
import { RandomUtils } from "../utils/RandomUtils";
import { Page } from "@playwright/test";
import { ActionsUtils } from "../utils/ActionsUtils";


export abstract class BasePage {

    readonly page : Page;
    readonly commonUtil : CommonUtils;
    readonly waitUtil : WaitUtils;
    readonly randomUtil : RandomUtils;
    readonly actionUtil : ActionsUtils;

    constructor(page : Page) {
        this.page = page;
        this.commonUtil = new CommonUtils(page);
        this.waitUtil = new WaitUtils(page);
        this.randomUtil = new RandomUtils(page);
        this.actionUtil = new ActionsUtils(page);
    }
}