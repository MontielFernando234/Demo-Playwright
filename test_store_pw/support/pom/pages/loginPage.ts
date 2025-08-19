import { Locator, Page } from "@playwright/test";
import { BasePage } from "../common/basePage";

export class LoginPage extends BasePage{
    readonly loginNameInput : Locator;
    readonly passwordInput : Locator;
    readonly forgotPasswordLink : Locator;
    readonly forgotLoginLink: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        super(page);
        this.loginNameInput = page.locator('#loginFrm_loginname');
        this.passwordInput = page.locator('#loginFrm_password');
        this.forgotPasswordLink = page.locator(`//a[normalize-space()='Forgot your password?']`);
        this.forgotLoginLink = page.locator(`//a[normalize-space()='Forgot your login?']`);
        this.loginButton = page.getByTitle('Login');
    }
}
