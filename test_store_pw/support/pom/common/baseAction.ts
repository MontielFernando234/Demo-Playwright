import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export abstract class BaseAction {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  
}