import { t } from 'testcafe';
import SignUpPage from '../pages/SignUpPage';

/**
 * Assert that the user is on the Sign up page
 * @param {boolean} [result=true] Result to assert, set to false to assert it not on sign up page
 */
export async function assertUserIsOnSignUpPage(result = true){
    const emailField = SignUpPage.emailField;
    await t.expect(emailField.exists).eql(result, `User is not moved to sign up page after clicking the link "Sign up for an account" `);
}
