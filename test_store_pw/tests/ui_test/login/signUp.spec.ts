import {test} from '@playwright/test';
import {Urls} from '../../../support/urls';
import {PageManager} from '../../../support/pageManager';
import {AccountData} from '../../../support/interface/accountData';

test.describe('Signup Tests', () => {
    let pageManager: PageManager;
  test.beforeEach(async ({page}) => {
    pageManager = new PageManager(page);
    await pageManager.navigateTo(Urls.REGISTER);
  });

  test('should fill and submit the create account form', async ({page}) => {
    
    const accountData : AccountData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'algo@gmail.com',
      telephone: '1234567890',
        fax: '0987654321',
        company: 'Test Company',
        address1: '123 Test St',
        address2: 'Suite 100',
        city: 'Test City',
        country: 'United States',
        region: 'California',
        postcode: '90001',
        username: 'johndoe',
        password: 'password123',
        confirmPassword: 'password123',
        subscribe: true,
        privacyPolicy: true,
    };
    await pageManager.getCreateAccountPageActions().fillCreateAccountForm(accountData);
});
});
