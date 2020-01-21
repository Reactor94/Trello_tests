import {loginAs, goToSignUpPage} from '../actions/login';
import {assertUserLoggedIn} from '../actions/boards';
import {assertUserIsOnSignUpPage} from '../actions/signUp';
import {ROOT_URL} from '../config/config';

fixture`Login tests`.page(ROOT_URL).beforeEach(async (t) =>{
    await t.maximizeWindow();
});

test('Should check that user cannot login to the Trello with invalid credentials', async () =>{
    await loginAs("v.pylypets94@gmail.com", "invalidpassword");
    await assertUserLoggedIn(false);
})

test('Should check that user can go to the sign up page from login page by clicking "Sign up for an account" link', async () =>{
    await goToSignUpPage();
    await assertUserIsOnSignUpPage();
})
