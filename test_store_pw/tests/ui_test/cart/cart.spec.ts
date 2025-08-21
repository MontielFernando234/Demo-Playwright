import {test, expect} from '@playwright/test';
import { Urls } from '../../../support/urls';
import { PageManager } from '../../../support/pageManager';

test.describe('Products test suite',()=>{
    let pm : PageManager;
    test.beforeEach('Go to login',async({page})=>{
            await test.step('User go to Login',async()=>{
                pm = new PageManager(page);
                await pm.navigateTo(Urls.LOGIN);
                await expect(page).toHaveURL(Urls.LOGIN);
            });

            await test.step('User fill fields login name and password',async()=>{
                await pm.getLoginPageActions().signIn(`johndoeTestQAA`,`Test1234!`);
            });

            await test.step('User expect go to My account page and your name is visible',async()=>{
                await expect(page).toHaveURL(Urls.MY_ACCOUNT);
                await pm.getMyAccountActions().getMyAccountPage().title.waitFor({state:'visible'});
                await expect(pm.getMyAccountActions().getMyAccountPage().title).toHaveText(' My Account');
                await expect(pm.getMyAccountActions().getMyAccountPage().subtitle).toHaveText('John');
            });
            await test.step('User go to home page',async()=>{
                await pm.getProductPageActions().goToHomePage(pm.getProductPageActions().getProductPage());
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
            //await pm.getCartPageActions().goToCartByItem(pm.getProductPageActions().getProductPage());
            await pm.navigateTo(Urls.CART);
            await pm.getCartPageActions().deleteAllCart();
            await pm.getCartPageActions().getCartPage().cartEmpty.waitFor({state:'visible'});
        });
    });
})