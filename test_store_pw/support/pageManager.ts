import {Page} from '@playwright/test';
import {LoginPageActions} from './pom/actions/loginPageActions';
import {CreateAccountPageActions} from './pom/actions/createAccountPageActions';
import {Urls} from './urls';

export class PageManager {
  private loginPageActions: LoginPageActions;
  private createAccountPageActions: CreateAccountPageActions;

  constructor(private page: Page) {
    this.loginPageActions = new LoginPageActions(page);
    this.createAccountPageActions = new CreateAccountPageActions(page);
  }

  async navigateTo(url : Urls) {
    await this.page.goto(url);
  }

  getLoginPageActions(): LoginPageActions {
    return this.loginPageActions;
  }

  getCreateAccountPageActions(): CreateAccountPageActions {
    return this.createAccountPageActions;
  }
}