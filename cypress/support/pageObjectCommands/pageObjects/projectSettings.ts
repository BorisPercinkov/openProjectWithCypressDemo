class projectSettings {
    // ***********************************************
    //
    // -- custom cypress commands for the project settings page --
    //
    // ***********************************************

    static readonly locators = {
        deleteBtn: `a.button.delete`,
        
    }

    static delete() {

        cy.get(this.locators.deleteBtn).click({force:true}).url().should('include','/destroy_info')
    }

}
export default projectSettings