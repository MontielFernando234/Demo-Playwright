import { Page, Locator } from "@playwright/test";
import { BasePage } from "../common/basePage";

export class ProductPage extends BasePage{
    readonly productCardList : Locator;

    constructor(page : Page){
        super(page);
        this.productCardList = page.locator(`div.list-inline > div`);
    }
}