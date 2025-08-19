import { Page } from "@playwright/test";
import { BaseAction } from "../common/baseAction";
import { CreateAccountPage } from "../pages/createAccountPage";
import { AccountData } from "../../interface/accountData";

export class CreateAccountPageActions extends BaseAction {

  constructor(page: Page) {
    super(page);
    this.basePage = new CreateAccountPage(page);
  }

  getCreateAccountPage(): CreateAccountPage {
    return this.basePage as CreateAccountPage;
  }
  
  async fillCreateAccountForm(data : AccountData): Promise<void> {
    await this.getCreateAccountPage().firstNameInput.fill(data.firstName);
    await this.getCreateAccountPage().lastNameInput.fill(data.lastName);
    await this.getCreateAccountPage().emailInput.fill(data.email);
    await this.getCreateAccountPage().telephoneInput.fill(data.telephone);
    await this.getCreateAccountPage().faxInput.fill(data.fax);
    await this.getCreateAccountPage().companyInput.fill(data.company);
    await this.getCreateAccountPage().address1Input.fill(data.address1);
    await this.getCreateAccountPage().address2Input.fill(data.address2);
    await this.getCreateAccountPage().cityInput.fill(data.city);
    await this.getCreateAccountPage().countrySelect.selectOption(data.country);
    await this.getCreateAccountPage().regionSelect.selectOption(data.region);
    await this.getCreateAccountPage().postcodeInput.fill(data.postcode);
    await this.getCreateAccountPage().userNameInput.fill(data.username);
    await this.getCreateAccountPage().passwordInput.fill(data.password);
    await this.getCreateAccountPage().confirmPasswordInput.fill(data.confirmPassword);

    if (data.subscribe) {
      await this.getCreateAccountPage().subscribeRadioButtonYes.click();
    } else {
      await this.getCreateAccountPage().subscribeRadioButtonNo.click();
    }

    if (data.privacyPolicy) {
      await this.getCreateAccountPage().privacyPolicyCheckbox.check();
    }
  }

  async submitCreateAccountForm(): Promise<void> {
    await this.getCreateAccountPage().continueButton.click();
  }
}
