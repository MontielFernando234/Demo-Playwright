import {Page,Locator} from '@playwright/test';
import { BasePage } from '../common/basePage';

export class CartPage extends BasePage{
    readonly cartEmpty : Locator;
    readonly deleteButtonItemProductList : Locator;

    constructor(page : Page){
        super(page);
        this.cartEmpty = page.getByText(`Your shopping cart is empty!`);
        this.deleteButtonItemProductList = page.locator(`i.fa.fa-trash-o.fa-fw`);
    }
}