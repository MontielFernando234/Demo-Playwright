import { Page } from "@playwright/test";
import { BaseAction } from "../common/baseAction";
import { AccountSuccessPage } from "../pages/accountSuccessPage";

export class AccountSuccessActions extends BaseAction {
    private accountSuccessPage: AccountSuccessPage;
    
    constructor(page: Page) {
        super(page);
        this.accountSuccessPage = new AccountSuccessPage(page);
    }

     getAccountSuccessPage(): AccountSuccessPage {
        return this.accountSuccessPage;
    }
    
    async getSuccessMessage(): Promise<string> {
        return await this.accountSuccessPage.getSuccessMessage();
    }
    
    async clickContinueButton(): Promise<void> {
        await this.accountSuccessPage.continueButton.click();
    }
}