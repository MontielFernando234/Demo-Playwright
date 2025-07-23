import { Page, Locator } from "@playwright/test";
import { BasePage } from "../common/basePage";

export class MyAccountPage extends BasePage {
    readonly title: Locator;
    readonly subtitle: Locator;

    constructor(page: Page) {
        super(page);
        this.title = page.locator('span.maintext');
        this.subtitle = page.locator('span.subtext');
    }
}