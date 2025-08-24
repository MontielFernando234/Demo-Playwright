import {test as base} from '@playwright/test';
import { PageManager } from '../pageManager';
import { Urls } from '../urls';

type MyFixtures = {
    login : PageManager;
    product : PageManager;
}

let pm = null;

export const test = base.extend<MyFixtures>({
    login : async ({page},use)=>{
        await test.step('User go to Login',async()=>{
            pm = new PageManager(page);        
            await pm.navigateTo(Urls.LOGIN);
        });

        await test.step('User fill fields login name and password',async()=>{                
            await pm.getLoginPageActions().signIn(`johndoeTestQAA`,`Test1234!`);
        });

        await use(pm);
    },
});

export { expect } from '@playwright/test';