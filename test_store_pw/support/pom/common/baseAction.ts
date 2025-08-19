import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export abstract class BaseAction {
  protected readonly page: Page;
  protected basePage : BasePage;

  constructor(page: Page) {
    this.page = page;
  }
  
}