import { Page } from "@playwright/test";
import { BaseAction } from "../common/baseAction";
import { CreateAccountPage } from "../pages/createAccountPage";
import { AccountData } from "../../interface/accountData";

export class CreateAccountPageActions extends BaseAction {
  private createAccountPage: CreateAccountPage;

  constructor(page: Page) {
    super(page);
    this.createAccountPage = new CreateAccountPage(page);
  }

  async fillCreateAccountForm(data : AccountData): Promise<void> {
    await this.createAccountPage.firstNameInput.fill(data.firstName);
    await this.createAccountPage.lastNameInput.fill(data.lastName);
    await this.createAccountPage.emailInput.fill(data.email);
    await this.createAccountPage.telephoneInput.fill(data.telephone);
    await this.createAccountPage.faxInput.fill(data.fax);
    await this.createAccountPage.companyInput.fill(data.company);
    await this.createAccountPage.address1Input.fill(data.address1);
    await this.createAccountPage.address2Input.fill(data.address2);
    await this.createAccountPage.cityInput.fill(data.city);
    await this.createAccountPage.countrySelect.selectOption(data.country);
    await this.createAccountPage.regionSelect.selectOption(data.region);
    await this.createAccountPage.postcodeInput.fill(data.postcode);
    await this.createAccountPage.userNameInput.fill(data.username);
    await this.createAccountPage.passwordInput.fill(data.password);
    await this.createAccountPage.confirmPasswordInput.fill(data.confirmPassword);

    if (data.subscribe) {
      await this.createAccountPage.subscribeRadioButtonYes.click();
    } else {
      await this.createAccountPage.subscribeRadioButtonNo.click();
    }

    if (data.privacyPolicy) {
      await this.createAccountPage.privacyPolicyCheckbox.check();
    }

    await this.createAccountPage.continueButton.click();
  }
}
