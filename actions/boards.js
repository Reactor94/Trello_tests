import { t } from 'testcafe';
import BoardsPage from '../pages/BoardsPage';

/**
 * Assert that the current user is logged into the platform
 * @param {boolean} [result=true] Result to assert, set to false to assert user is not logged in
 */
export async function assertUserLoggedIn(result = true){
    const createTeamButton = BoardsPage.createTeamButton;
    await t.expect(createTeamButton.exists).eql(result, `User is not logged, Could not find an element in the board page`);
}
