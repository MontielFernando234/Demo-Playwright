import { Page } from "@playwright/test";
import { BaseAction } from "../common/baseAction";
import { AccountSuccessPage } from "../pages/accountSuccessPage";

export class AccountSuccessActions extends BaseAction {
    
    constructor(page: Page) {
        super(page);
        this.basePage = new AccountSuccessPage(page);
    }

     getAccountSuccessPage(): AccountSuccessPage {
        return this.basePage as AccountSuccessPage;
    }
    
    async getSuccessMessage(): Promise<string> {
        return await this.getAccountSuccessPage().getSuccessMessage();
    }
    
    async clickContinueButton(): Promise<void> {
        await this.getAccountSuccessPage().continueButton.click();
    }
}