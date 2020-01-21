# qa
It is a testing task that contains 2 tests for login page.


# Installation
1. install node
2. in project folder, run: ```npm install```
3. to run tests, run ```npm run e2e```

### Page Objects
Actual Pages are coded as `<DescriptiveName>Page`.

### Actions

Higher order functions such as loginAs() will perform multiple actions.
Actions beginning with assert, eg assertUserLoggedIn() performs an actual assert.

### Specs
1. Should never reference css selectors eg. `await t.click('.sign_in_button');`
2. Should never reference Page Object items eg. `await t.click(LoginPage.loginButton);`
3. Should call actions eg. `await login.loginAs('vita@foo.com', 'Password');`
