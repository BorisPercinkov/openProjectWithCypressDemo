class deleteProject {
    // ***********************************************
    //
    // -- custom cypress commands for the project termination page --
    //
    // ***********************************************

    static readonly locators = {
        projectNameInput: `div.danger-zone--verification>input`,
        confirmDeleteBtn: `button[title='Delete']`
        
    }

    static enterProjectname(projectName:string) {
        cy.get(this.locators.projectNameInput).type(projectName,{force:true});
    }

    static deleteProject() {
        cy.get(this.locators.confirmDeleteBtn).click({force:true});
    }

}
export default deleteProject