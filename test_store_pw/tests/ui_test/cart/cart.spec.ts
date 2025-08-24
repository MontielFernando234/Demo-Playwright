import {test, expect} from '../../../support/fixture/fixtures';
import { Urls } from '../../../support/urls';
import { PageManager } from '../../../support/pageManager';

test.describe('Products test suite',()=>{
    let pm : PageManager;
    test.beforeEach('Go to login',async({page})=>{
        await test.step('User go to Home Page',async()=>{
            pm = new PageManager(page);
            await pm.navigateTo(Urls.HOME);
            await expect(page).toHaveURL(Urls.HOME);
        });       
    });

    test('Add first product from home page',async({page})=>{
        await test.step('User add first product',async()=>{
            await pm.getProductPageActions().addFirstProductToCart();
        });

        await test.step('User expect add 1 item in cart',async()=>{
            expect(pm.getProductPageActions().getProductPage().totalItemsCartLink).toHaveText('1');
        });

        await test.step('User delete all items', async()=>{
            await pm.navigateTo(Urls.CART);
            await pm.getCartPageActions().deleteAllCart();
            await pm.getCartPageActions().getCartPage().cartEmpty.waitFor({state:'visible'});
        });
    });
})