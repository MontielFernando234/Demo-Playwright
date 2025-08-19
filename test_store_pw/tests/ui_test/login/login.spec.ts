import { test, expect } from '@playwright/test';
import {PageManager} from '../../../support/pageManager';
import {Urls} from '../../../support/urls';
/*
    Test Case: Login with valid credentials
    Description: This test case verifies that a user can log in with valid credentials.
    email: userteststore.qaa@yopmail.com
    username: johndoeTestQAA
    password: Test1234!
 */

    test.describe('Login test suite',()=>{
        let pm : PageManager;
        test.beforeEach('Go to login',async({page})=>{
            await test.step('User go to Login',async()=>{
                pm = new PageManager(page);
                await pm.navigateTo(Urls.LOGIN);
                await expect(page).toHaveURL(Urls.LOGIN);
            });
        });

        test('Login with valid credentials',async({page})=>{
            await test.step('User fill fields login name and password',async()=>{
                await pm.getLoginPageActions().signIn(`johndoeTestQAA`,`Test1234!`);
            });

            await test.step('User expect go to My account page and your name is visible',async()=>{
                await expect(page).toHaveURL(Urls.MY_ACCOUNT);
                await pm.getMyAccountActions().getMyAccountPage().title.waitFor({state:'visible'});
                await expect(pm.getMyAccountActions().getMyAccountPage().title).toHaveText(' My Account');
                await expect(pm.getMyAccountActions().getMyAccountPage().subtitle).toHaveText('John');
            });
        });
    });