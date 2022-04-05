/// <reference types="cypress"/>

describe('Login with existing user', () => {
    it('Should GO to BackMarket site', () => {
        cy.visit("https://preprod.backmarket.fr/register")
    })
    it('Should accept CTA', () => {
        cy.get('[data-qa="accept-cta"]').click()
    })
    it('Should fill the signin email', () => {
        cy.get('[id=signin-email]').type("eva.coze@yopmail.com")
    })
    it('Should fill the password user', () => {
        cy.get('[id=signin-password]').type("M@steR42")
    })
    it('Should click on validate button', () => {
        cy.get('[data-qa=signin-submit-button]').click()
    })
    it('User is reconize and redirected to last order', () => {
        cy.get('h2').should("exist").and("be.visible")
    })
})