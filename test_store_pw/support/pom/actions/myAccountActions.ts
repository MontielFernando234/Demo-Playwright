import { Page } from "@playwright/test";
import { BaseAction } from "../common/baseAction";
import { MyAccountPage } from "../pages/myAccountPage";

export class MyAccountActions extends BaseAction {
    private myAccountPage: MyAccountPage;

    constructor(page: Page) {
        super(page);
        this.myAccountPage = new MyAccountPage(page);
    }

    getMyAccountPage() {
        return this.myAccountPage;
    }

}