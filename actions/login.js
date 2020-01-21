import { t } from 'testcafe';
import LoginPage from '../pages/LoginPage';

/**
 * Attempt to login with the provided details.
 * @param {string} email Email to login with
 * @param {string} password Password of user
 */
export async function loginAs(email, password){
    await t.typeText(LoginPage.emailInput, email);
    await t.typeText(LoginPage.passwordInput, password);
    await t.click(LoginPage.loginButton);
}

/**
 * It goes to Sign up page
 */
export async function goToSignUpPage(){
    await t.click(LoginPage.signUpButton);
}
