import {expect, test} from '@playwright/test';
import {Urls} from '../../../support/urls';
import {PageManager} from '../../../support/pageManager';
import {AccountData} from '../../../support/interface/accountData';
import {faker} from '@faker-js/faker';

test.describe('Signup Tests', () => {
    let pageManager: PageManager;
  test.beforeEach(async ({page}) => {
    pageManager = new PageManager(page);
    await pageManager.navigateTo(Urls.REGISTER);
    expect(page).toHaveURL(Urls.REGISTER);
  });

  test('Signup with full form', async ({page}) => {

    const fn = faker.person.firstName();

    const accountData : AccountData = {
      firstName: fn,
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      telephone: faker.phone.number({style : 'international'}),
        fax: faker.phone.number({style : 'international'}),
        company: faker.company.name(),
        address1: faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        city: faker.location.city(),
        country: 'United States',
        region: 'California',
        postcode: '90001',
        username: faker.internet.username({firstName:faker.person.firstName(), lastName:faker.person.lastName()}),
        password: 'Test1234!',
        confirmPassword: 'Test1234!',
        subscribe: true,
        privacyPolicy: true,
    };

    expect(pageManager.getCreateAccountPageActions().getCreateAccountPage().title).toHaveText('Create Account');

    await pageManager.getCreateAccountPageActions().fillCreateAccountForm(accountData);

    await pageManager.getCreateAccountPageActions().submitCreateAccountForm();

    expect(page).toHaveURL(Urls.ACCOUNT_SUCCESS);

    pageManager.getAccountSuccessActions().getAccountSuccessPage().title.waitFor({state: 'visible'});

    expect(pageManager.getAccountSuccessActions().getAccountSuccessPage().title).toHaveText('Your Account Has Been Created!');

    expect(pageManager.getAccountSuccessActions().getAccountSuccessPage().successMessage).toContainText(`Congratulations! Your new account has been successfully created! You can now take advantage of member privileges to enhance your online shopping experience with us. If you have ANY questions about the operation of this online shop, please email the store owner. A confirmation has been sent to the provided email address. If you have not received it within the hour, please contact us.`);

    await pageManager.getAccountSuccessActions().clickContinueButton();

    expect(page).toHaveURL(Urls.MY_ACCOUNT);

    expect(pageManager.getMyAccountActions().getMyAccountPage().title).toHaveText('My Account');

    expect(pageManager.getMyAccountActions().getMyAccountPage().subtitle).toHaveText(fn);
});
});