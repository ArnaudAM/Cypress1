/// <reference types="cypress"/>

describe('Acces a BackMarket', () => {
    it('Should GO to BackMarket site', () => {
        cy.visit("https://preprod.backmarket.fr/register")
    })
    it('Should accept CTA', () => {
        cy.get('[data-qa="accept-cta"]').click()
    })
})

describe('Login user', () => {
    it('Should fill the signin email', () => {
        cy.get('[id=signin-email]').type("arnaud.auzoudm@gmail.com")
    })
    it('Should fill the password user', () => {
        cy.get('[id=signin-password]').type("M@steR42!")
    })
    it('Should click on validate button', () => {
        cy.get('[data-qa=signin-submit-button]').click()
    })
})