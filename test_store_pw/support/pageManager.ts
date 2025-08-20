import {Page} from '@playwright/test';
import {LoginPageActions} from './pom/actions/loginPageActions';
import {CreateAccountPageActions} from './pom/actions/createAccountPageActions';
import {AccountSuccessActions} from './pom/actions/accountSuccessActions';
import {MyAccountActions} from './pom/actions/myAccountActions';
import {ProductPageActions} from './pom/actions/productPageActions';
import { CartPageActions } from './pom/actions/cartPageActions';
import { BaseAction } from './pom/common/baseAction';
import {Urls} from './urls';

export class PageManager {
  private baseAction : BaseAction;
  private readonly page : Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url : Urls) {
    await this.page.goto(url);
  }

  // Actions for Login Page
  getLoginPageActions(): LoginPageActions {
    return this.baseAction = new LoginPageActions(this.page);
  }

  // Actions for Create Account Page
  getCreateAccountPageActions(): CreateAccountPageActions {
    return this.baseAction = new CreateAccountPageActions(this.page);
  }

  // Actions for Account Success Page
  getAccountSuccessActions(): AccountSuccessActions {
    return this.baseAction = new AccountSuccessActions(this.page);
  }

  // Actions for My Account Page
  getMyAccountActions(): MyAccountActions {
    return this.baseAction = new MyAccountActions(this.page);
  }

  //Actions for Product Page
  getProductPageActions(): ProductPageActions{
    return this.baseAction = new ProductPageActions(this.page);
  }

  //Actions for cart Page
  getCartPageActions(): CartPageActions{
    return this.baseAction = new CartPageActions(this.page);
  }
}