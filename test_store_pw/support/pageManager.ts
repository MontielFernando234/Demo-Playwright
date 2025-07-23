import {Page} from '@playwright/test';
import {LoginPageActions} from './pom/actions/loginPageActions';
import {CreateAccountPageActions} from './pom/actions/createAccountPageActions';
import {AccountSuccessActions} from './pom/actions/accountSuccessActions';
import {MyAccountActions} from './pom/actions/myAccountActions';
import {Urls} from './urls';

export class PageManager {
  private loginPageActions: LoginPageActions;
  private createAccountPageActions: CreateAccountPageActions;
  private accountSuccessActions: AccountSuccessActions;
  private myAccountActions: MyAccountActions;

  constructor(private page: Page) {
    this.loginPageActions = new LoginPageActions(page);
    this.createAccountPageActions = new CreateAccountPageActions(page);
    this.accountSuccessActions = new AccountSuccessActions(page);
    this.myAccountActions = new MyAccountActions(page);
  }

  async navigateTo(url : Urls) {
    await this.page.goto(url);
  }

  // Actions for Login Page
  getLoginPageActions(): LoginPageActions {
    return this.loginPageActions;
  }

  // Actions for Create Account Page
  getCreateAccountPageActions(): CreateAccountPageActions {
    return this.createAccountPageActions;
  }

  // Actions for Account Success Page
  getAccountSuccessActions(): AccountSuccessActions {
    return this.accountSuccessActions;
  }

  // Actions for My Account Page
  getMyAccountActions(): MyAccountActions {
    return this.myAccountActions;
  }
}