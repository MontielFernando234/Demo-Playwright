import { Locator, Page } from "@playwright/test";

export abstract class BasePage {
    protected readonly page: Page;
    readonly logo : Locator;
    readonly welcomeBackMenu : Locator;
    readonly menuSelect : Locator;
    readonly searchKeywords : Locator;
    readonly goToSelect : Locator;
    readonly currencyList : Locator;
    readonly cartLink : Locator;
    readonly totalItemsCartLink : Locator;
    readonly totalPriceCartLink : Locator;
    readonly viewCartLink : Locator;
    readonly viewCheckoutLink : Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator(`div.navbar-header.header-logo`);
        this.welcomeBackMenu = page.locator(`div[class='menu_text']`);
        this.menuSelect = page.locator(`div[id='topnav'] select[class='form-control']`);
        this.searchKeywords = page.getByPlaceholder(`Search Keywords`);
        this.goToSelect = page.locator(`nav[class='subnav'] select[class='form-control']`);
        this.currencyList = page.locator(`ul[class='nav language pull-left'] a[class='dropdown-toggle']`);
        this.cartLink = page.locator(`ul[class='nav topcart pull-left'] a[class='dropdown-toggle']`);
        this.totalItemsCartLink = page.locator(`(//ul[@class='nav topcart pull-left']//li[@class='dropdown hover']//a//span)[1]`);
        this.totalPriceCartLink = page.locator(`(//ul[@class='nav topcart pull-left']//li[@class='dropdown hover']//a//span)[2]`);
        this.viewCartLink = page.locator(`a[title='View Cart']`);
        this.viewCheckoutLink = page.locator(`a[title='Checkout']`);
    }
    
}