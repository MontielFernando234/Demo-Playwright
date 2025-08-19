import { Page } from "@playwright/test";
import { BaseAction } from "../common/baseAction";
import { MyAccountPage } from "../pages/myAccountPage";

export class MyAccountActions extends BaseAction {

    constructor(page: Page) {
        super(page);
        this.basePage = new MyAccountPage(page);
    }

    getMyAccountPage() {
        return this.basePage as MyAccountPage;
    }

}