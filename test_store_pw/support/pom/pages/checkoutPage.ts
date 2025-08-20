import {Page,Locator} from '@playwright/test';
import { BasePage } from '../common/basePage';

export class CheckoutPage extends BasePage{

    constructor(page : Page){
        super(page);
    }
}