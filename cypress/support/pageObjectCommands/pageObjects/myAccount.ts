class account {
    // ***********************************************
    //
    // -- custom cypress commands for the account page page --
    //
    // ***********************************************

    static readonly locators = {
        usernameValue: 'label[for=username]'
        
    }

    static assertUsernameValue(value:string = Cypress.env('adminUsername')) {
        // -- using.next() because of too generic (poor) locators --//
        cy.get(this.locators.usernameValue).next().should('include.text',value);
    }

}
export default account