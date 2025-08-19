import { Page } from "@playwright/test";
import { BaseAction } from '../common/baseAction';
import { LoginPage } from "../pages/loginPage";

export class LoginPageActions extends BaseAction{
  constructor(page: Page) {
    super(page);
    this.basePage = new LoginPage(page);
  }

  getLoginPage():LoginPage{
    return this.basePage as LoginPage;
  }

  async signIn(userName : string, password: string): Promise<void>{
    const lp : LoginPage = this.getLoginPage();
    await lp.loginNameInput.pressSequentially(userName,{delay:50});
    await lp.passwordInput.pressSequentially(password,{delay:50});
    await lp.loginButton.click();
  }
  
}
