import {Page, expect} from '@playwright/test';
import { BasePage } from '../common/basePage';
import { BaseAction } from '../common/baseAction';
import {ProductPage} from '../pages/productPage';

export class ProductPageActions extends BaseAction{
    constructor(page : Page){
        super(page);
    }

    getProductPage() : ProductPage{
        return this.basePage = new ProductPage(this.page);
    }

    async addFirstProductToCart():Promise<void>{
        await this.getProductPage().productCardList.first().getByTitle(`Add to Cart`).click();
    }
}