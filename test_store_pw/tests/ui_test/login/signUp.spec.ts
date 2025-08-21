import {expect, test} from '@playwright/test';
import {Urls} from '../../../support/urls';
import {PageManager} from '../../../support/pageManager';
import {AccountData} from '../../../support/interface/accountData';
import { User_Generator } from '../../../support/data_generator/user_generator';

test.describe('Signup Tests', () => {
    let pageManager: PageManager;
    test.beforeEach('Go to register page',async ({page}) => {
      await test.step('User go to register page for create new account',async()=>{
        pageManager = new PageManager(page);
        await pageManager.navigateTo(Urls.REGISTER);
        await expect(page).toHaveURL(Urls.REGISTER);
      })
    });

    test('Signup with full form', async ({page}) => {
      const ug = new User_Generator();

      const accountData : AccountData = ug.generateUser();

      await test.step('User expect title page is Create account',async()=>{
        await expect(pageManager.getCreateAccountPageActions().getCreateAccountPage().title).toHaveText('Create Account');
      });

      await test.step('user fill register form and send it',async()=>{
        await pageManager.getCreateAccountPageActions().fillCreateAccountForm(accountData);

        await pageManager.getCreateAccountPageActions().submitCreateAccountForm();
      });

      await test.step('User expect redirected account success url',async()=>{
        await expect(page).toHaveURL(Urls.ACCOUNT_SUCCESS);
      });

      await test.step('User validate page title and success message',async()=>{
        await pageManager.getAccountSuccessActions().getAccountSuccessPage().title.waitFor({state: 'visible'});

        await expect(pageManager.getAccountSuccessActions().getAccountSuccessPage().title).toHaveText('Your Account Has Been Created!');

        await expect(pageManager.getAccountSuccessActions().getAccountSuccessPage().successMessage).toContainText(`Congratulations! Your new account has been successfully created! You can now take advantage of member privileges to enhance your online shopping experience with us. If you have ANY questions about the operation of this online shop, please email the store owner. A confirmation has been sent to the provided email address. If you have not received it within the hour, please contact us.`);
      });

      await test.step('User continue with operation',async()=>{
        await pageManager.getAccountSuccessActions().clickContinueButton();
      });
      
      await test.step('User expect redirected to My account URL',async()=>{
        await expect(page).toHaveURL(Urls.MY_ACCOUNT);
      });
      
      await test.step('User validate title page text and subtitle',async()=>{
        await expect(pageManager.getMyAccountActions().getMyAccountPage().title).toHaveText(' My Account');

        await expect(pageManager.getMyAccountActions().getMyAccountPage().subtitle).toHaveText(accountData.firstName);
      });
  });
});