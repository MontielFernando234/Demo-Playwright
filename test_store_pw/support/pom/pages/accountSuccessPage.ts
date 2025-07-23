import { Page, Locator } from "@playwright/test";
import { BasePage } from "../common/basePage";

export class AccountSuccessPage extends BasePage {
    readonly title: Locator;
    readonly successMessage: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        super(page);
        this.title = page.locator('h1.heading1');
        this.successMessage = page.locator('section.mb40');
        this.continueButton = page.getByTitle('Continue');
    }

    async getSuccessMessage(): Promise<string> {
        
        const txt1 : string = await this.successMessage.locator('p').nth(1).innerText();
        const txt2 : string = await this.successMessage.locator('p').nth(2).innerHTML();
        const txt3 : string = await this.successMessage.locator('p').nth(3).innerHTML();
        const txt4 : string = await this.successMessage.locator('p').nth(4).innerHTML();

        return `${txt1}\\n${txt2}\\n${txt3}\\n${txt4}`;
        
    }
}