import {Selector} from 'testcafe';

export default class LoginPage{

    static emailInput = Selector("#user");

    static passwordInput = Selector("#password");

    static loginButton = Selector("#login");

    static signUpButton = Selector('.bottom-form-link a').withText('Sign up for an account');
}
