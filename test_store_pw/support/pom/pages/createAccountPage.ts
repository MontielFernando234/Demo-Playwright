import { Page, Locator } from "@playwright/test";

export class CreateAccountPage {
  private readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly faxInput: Locator;
  readonly companyInput: Locator;
  readonly address1Input: Locator;
  readonly address2Input: Locator;
  readonly cityInput: Locator;
  readonly countrySelect: Locator;
  readonly regionSelect: Locator;
  readonly postcodeInput: Locator;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly subscribeRadioButtonYes: Locator;
  readonly subscribeRadioButtonNo: Locator;
  readonly privacyPolicyCheckbox: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("input[name='firstname']");
    this.lastNameInput = page.locator("input[name='lastname']");
    this.emailInput = page.locator("#AccountFrm_email");
    this.telephoneInput = page.locator("input[name='telephone']");
    this.faxInput = page.locator("input[name='fax']");
    this.companyInput = page.locator("input[name='company']");
    this.address1Input = page.locator("input[name='address_1']");
    this.address2Input = page.locator("input[name='address_2']");
    this.cityInput = page.locator("input[name='city']");
    this.regionSelect = page.locator("select[name='zone_id']");
    this.postcodeInput = page.locator("input[name='postcode']");
    this.countrySelect = page.locator("select[name='country_id']");
    this.userNameInput = page.locator("input[name='loginname']");
    this.passwordInput = page.locator("input[name='password']");
    this.confirmPasswordInput = page.locator("input[name='confirm']");
    this.subscribeRadioButtonYes = page.locator("label[for='AccountFrm_newsletter1']");
    this.subscribeRadioButtonNo = page.locator("label[for='AccountFrm_newsletter0']");
    this.privacyPolicyCheckbox = page.locator("#AccountFrm_agree");
    this.continueButton = page.locator("button[title='Continue']");
  }
}
