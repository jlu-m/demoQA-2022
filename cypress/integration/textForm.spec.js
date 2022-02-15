/// <reference types="Cypress"/>

import textFormPage from '../pages_demoQA/textFormPage'
const dataSetMain = require('../../cypress/fixtures/dataSetMain.json')
const dataSetAlt = require('../../cypress/fixtures/dataSetAlt.json')


describe('text-box form', () => {
    beforeEach(()=>{
        cy.visit('text-box')     
    })
    afterEach(()=>{
        cy.wait(3000)
    })
    dataSetMain.forEach(dataElementMain =>{
        it('Main Path', () => {
            textFormPage.typeUsername(dataElementMain.name)
            textFormPage.typeEmail(dataElementMain.email)
            textFormPage.typeCurrentAddress(dataElementMain.address.current)
            textFormPage.typePermanentAddress(dataElementMain.address.permanent)
            textFormPage.submitTextForm()
                       
            textFormPage.elements.usernameResult().should('contains.text',dataElementMain.name)
            textFormPage.elements.emailResult().should('contains.text',dataElementMain.email)
            textFormPage.elements.currentAddressResult().should('contains.text',dataElementMain.address.current)
            textFormPage.elements.permanentAddressResult().should('contains.text',dataElementMain.address.permanent)
        })


    })
    dataSetAlt.forEach(dataElementAlt =>{
        it('Alternative Path', () => {
            textFormPage.typeUsername(dataElementAlt.name)
            textFormPage.typeEmail(dataElementAlt.email)
            textFormPage.typeCurrentAddress(dataElementAlt.address.current)
            textFormPage.typePermanentAddress(dataElementAlt.address.permanent)
            textFormPage.submitTextForm()
            
            textFormPage.elements.usernameResult().should('not.exist') 
            textFormPage.elements.emailResult().should('not.exist') 
            textFormPage.elements.currentAddressResult().should('not.exist') 
            textFormPage.elements.permanentAddressResult().should('not.exist') 
            textFormPage.elements.emailInput().should('have.css','border-color','rgb(255, 0, 0)') 

        })
    })
})