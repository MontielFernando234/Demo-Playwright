import { AccountData } from '../interface/accountData';
import {faker} from '@faker-js/faker';

export class User_Generator{
    private accountData : AccountData;

    constructor(){
        this.accountData = null;
    }

    generateUser() : AccountData{
        const fn = faker.person.firstName(), ln = faker.person.lastName(), pwd = faker.internet.password();
        return this.accountData = {
        firstName: fn,
        lastName: ln,
        email: faker.internet.email({firstName:fn, lastName:ln, provider:'yopmail.com'}),
        telephone: faker.phone.number({style : 'international'}),
          fax: faker.phone.number({style : 'international'}),
          company: faker.company.name(),
          address1: faker.location.streetAddress(),
          address2: faker.location.secondaryAddress(),
          city: faker.location.city(),
          country: 'United States',
          region: 'California',
          postcode: '90001',
          username: faker.internet.username({firstName:fn, lastName:ln}),
          password: pwd,
          confirmPassword: pwd,
          subscribe: true,
          privacyPolicy: true,
      };

    }

}