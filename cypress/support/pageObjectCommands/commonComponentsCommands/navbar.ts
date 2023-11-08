class navbar {
  // ***********************************************
  //
  // -- custom cypress commands for the navbar component --
  //
  // ***********************************************>

  static readonly locators = {
  // -- all of the locators related to the navbar component -- //
  signInBtn: 'a[title=\'Sign in\']>.op-app-menu--item-title',
  usernameInputField: '#username-pulldown',
  passwordInputField: '#password-pulldown',
  loginBtn: '#login-pulldown',
  userAvatar: 'a.op-top-menu-user>span.op-app-menu--item-title',
  clickOptionFromUserMenuDropdown:(option:string) => `ul#user-menu>li[data-name=\'${option}\']>a>span`,
  greenPlusIcon: 'a[title=\'Open quick add menu\']>i',
  newProject: 'li[data-name=\'new_project\']>a',
  inviteUser: 'li[data-name=\'invite_user\']>a',
  sideMenuBtn: `button#main-menu-toggle`,
  projectSettings: `li[data-name='settings']>div#settings-wrapper>a`
  }

  
  static createNew () {
    cy.get(this.locators.greenPlusIcon).click({force:true}).wait(1500);
    return this;
  }

  static project () {
    cy.get(this.locators.newProject).click({force:true}).url().should('include','projects/new');
    return this;
  }

  static user () {
    cy.get(this.locators.inviteUser).click({force:true});
    return this;
  }


  static selectLinkFromSideMenu() {

    cy.get(this.locators.sideMenuBtn).within(() => {
      cy.root()
      .invoke('attr', 'title').then(title => {

      // -- will expand the side menu if not expanded -- //
        if (title == 'Expand project menu') cy.root().click({force:true});
      });
    });
    return this;
  }

  static projectSettings() {
    cy.wait(1500).get(this.locators.projectSettings).click({force:true}).url().should('include','settings/general/');
    return this;
  }


  static credentialInfo(type:string,credential?:string) {
    switch (type) {
      case 'username':
        if (!credential) {
          credential = Cypress.env('adminUsername');
        }
        // @ts-ignore
        cy.get(this.locators.usernameInputField).clear().type(credential,{force:true});
      break;
    
      case 'password':
        if (!credential) {
          credential = Cypress.env('adminPassword');
        }
        // @ts-ignore
        cy.get(this.locators.passwordInputField).clear().type(credential,{force:true});
      break;

      default: { 
        throw new Error('wrong input!');  
      } 
    }
  }

  static clickSignInBtn() {
    cy.get(this.locators.signInBtn).click({force:true});
  }

  static clickLoginBtn() {
    cy.get(this.locators.loginBtn).click({force:true});
  }

  static clickUserAvatar() {
    cy.get(this.locators.userAvatar).click({force:true});
  }

  static clickOptionFromUserMenuDropdown(option:string){
    switch (option) {
      case 'my_page':
        throw new Error('not implemented yet');
      //break;

      case 'my_profile':
        throw new Error('not implemented yet');
      //break;
      
      case 'my_account':
        cy.wait(1000)
        cy.get(this.locators.clickOptionFromUserMenuDropdown(option)).click({force:true}).url().should('include','my/account');
      break;

      case 'administration':
        throw new Error('not implemented yet');
      //break;
    
      case 'logout':
        cy.wait(1000)
        cy.get(this.locators.clickOptionFromUserMenuDropdown(option)).click({force:true});
      //break;
    }
  }

}
export default navbar