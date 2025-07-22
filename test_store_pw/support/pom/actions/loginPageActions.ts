import { Page } from "@playwright/test";
import { BaseAction } from '../common/baseAction';

export class LoginPageActions extends BaseAction{
  constructor(page: Page) {
    super(page);
  }
  
}
