class textFormPage{
    
    elements = {
         usernameInput : () => cy.get('#userName'),
         emailInput : () => cy.get('#userEmail'),
         currentAddressInput : () => cy.get('#currentAddress'),
         permanentAddressInput : () => cy.get('#permanentAddress'),
         submitButton : () => cy.get('#submit'),
         boardResult : () => cy.get('.border'),
         usernameResult : () => cy.get('#name'),
         emailResult : () => cy.get('#email'),
         currentAddressResult : () => cy.get('.border > #currentAddress'),
         permanentAddressResult : () => cy.get('.border > #permanentAddress')

    }
    typeUsername(username){
        if (username !== "")
            this.elements.usernameInput().type(username, {force : true})
    }
    typeEmail(email){
        if (email !== "")
            this.elements.emailInput().type(email, {force : true})
    }
    typeCurrentAddress(currentaddress){
        if (currentaddress !== "")
            this.elements.currentAddressInput().type(currentaddress, {force : true})
    }
    typePermanentAddress(permanentaddress){
        if (permanentaddress !== "")
            this.elements.permanentAddressInput().type(permanentaddress, {force : true})
    }
    submitTextForm(){
        this.elements.submitButton().click()
    }
}

module.exports = new textFormPage()