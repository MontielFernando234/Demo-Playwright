import { Page, Locator } from "@playwright/test";
import { BaseAction } from "../common/baseAction";
import { CartPage } from "../pages/cartPage";

export class CartPageActions extends BaseAction{
    constructor(page : Page){
        super(page);
    }

    getCartPage():CartPage{
        return this.basePage = new CartPage(this.page);
    }

    async deleteAllCart() : Promise<void>{

        if(!await this.getCartPage().cartEmpty.isVisible()){
            const listButonDelete = await this.getCartPage().deleteButtonItemProductList.all();

            for (const item of listButonDelete){
                item.click({force:true});
            }
        }else console.info('The cart is empty!!!');
    }
}