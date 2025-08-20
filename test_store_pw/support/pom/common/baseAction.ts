import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export abstract class BaseAction {
  protected readonly page: Page;
  protected basePage : BasePage;

  constructor(page: Page) {
    this.page = page;
  }
  
  async goToHomePage(basePage : BasePage) : Promise<void>{
    basePage.logo.click();
  }

  async searchByKeyword(basePage : BasePage, keyword : string) : Promise<void>{
    basePage.searchKeywords.pressSequentially(keyword);
    basePage.searchKeywords.press('enter');
  }

  async goToCartByItem(basePage : BasePage) : Promise<void>{
    basePage.cartLink.click();
  }

  async getTotalItemsCartList(basePage : BasePage):Promise<string>{
    return await basePage.totalItemsCartLink.innerText();
  }
}