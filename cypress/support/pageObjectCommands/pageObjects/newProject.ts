class newProject {
    // ***********************************************
    //
    // -- custom cypress commands for the new project creation page --
    //
    // ***********************************************

    static readonly locators = {
        name: 'input#formly_3_textInput_name_0',
        subprojectDwopdown: 'op-dynamic-form>form>formly-form>formly-field>formly-group>formly-field:nth-of-type(2)>op-dynamic-field-wrapper>spot-form-field>label>div.spot-form-field--input',
        subprojectOf:(subproject:string) => `div[title='${subproject}']`,
        saveBtn: 'button[type=\'submit\']'
        
    }

    static enterName(value:string = Cypress.env('adminUsername')) {
        // -- using.next() because of too generic (poor) locators --//
        cy.get(this.locators.name).clear().type(value);
    }

    static selectSubproject(subproject:string) {
        cy.get(this.locators.subprojectDwopdown).click({force:true}).type(subproject)
        .wait(1500).get(this.locators.subprojectOf(subproject)).click({force:true});
    }

    static saveNewProject(projectName:string) {
        cy.get(this.locators.saveBtn).click({force:true}).wait(1500).url().should('include',`projects/${projectName}/`);
    }
}
export default newProject