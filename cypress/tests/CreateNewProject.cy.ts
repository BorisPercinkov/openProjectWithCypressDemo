import nav from '../support/pageObjectCommands/commonComponentsCommands/navbar';
import project from '../support/pageObjectCommands/pageObjects/newProject';
import ps from '../support/pageObjectCommands/pageObjects/projectSettings';
import dp from '../support/pageObjectCommands/pageObjects/deleteProject';

describe("It will create a new Project", () => {
    const projectName = 'automationdemo';
    const subprojectName = 'Demo project'

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

    it('should click on the green plus icon, and select new project from the list', () => {
        nav.createNew().project();
    });

    it('it should enter the project\'s name', () => {
        project.enterName(projectName);
    });

    it('should select the subproject', () => {
        project.selectSubproject(subprojectName);
    });

    it('should save the new project and the user should be taken to its page', () => {
       project.saveNewProject(projectName); 
    });

    it('should now navigate to project settings', () => {
       nav.selectLinkFromSideMenu().projectSettings();
    });

    it('should click the delete button', () => {
        ps.delete();
    });
    
    it('should type the project\'s who is being deleted', () => {
        dp.enterProjectname(projectName);
    });

    it('should confirm the deletion by clicking on the delete button', () => {
        dp.deleteProject();
    });

    it('should navigate back to projects page automatically', () => {
        cy.url().should('include','/projects')
    });

    it('should click on the user avatar to reveal the dropdown menu', () => {
        nav.clickUserAvatar();
    });

    it('should logout', () => {
        nav.clickOptionFromUserMenuDropdown('logout');
    });
});