import nav from '../support/pageObjectCommands/commonComponentsCommands/navbar';
import acc from '../support/pageObjectCommands/pageObjects/myAccount';

describe("It will log in with the admin user into the platform, assert its username and then logOut", () => {

    before(() => {
        cy.clearCookies();
        cy.visit('/');
    });

    it('should click onto the "Sign in" button to expand the login dropdown form', () => {
        nav.clickSignInBtn();
    });

    it('should enter the admin username', () => {
        nav.credentialInfo('username');
    });

    it('should enter the admin password', () => {
        nav.credentialInfo('password');
    });

    it('should login', () => {
        nav.clickLoginBtn();
    });

    it('should click on the user avatar to reveal the dropdown menu', () => {
        nav.clickUserAvatar();
    });

    it('should click on the "My Account" option from the dropdown menu', () => {
        nav.clickOptionFromUserMenuDropdown('my_account');
    });

    it('should assert that the username value is correct', () => {
        acc.assertUsernameValue();
    });

    it('should click on the user avatar to reveal the dropdown menu', () => {
        nav.clickUserAvatar();
    });

    it('should logout', () => {
        nav.clickOptionFromUserMenuDropdown('logout');
    });
});