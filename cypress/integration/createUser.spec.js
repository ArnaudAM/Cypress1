/// <reference types="cypress"/>

describe.skip('When NOT in Chrome', { browser: '!chrome' }, () => {
    it('Shows warning', () => {
      cy.get('.browser-warning').should(
        'contain',
        'For optimal viewing, use Chrome browser'
      )
    })
})

describe('Create a new user', () => {
    it('Should GO to BackMarket site', () => {
        cy.visit("https://preprod.backmarket.fr/register")
    })
    it('Should accept CTA', () => {
        cy.get('[data-qa="accept-cta"]').click()
    })
    it('Should fill the firstname field', () => {
        cy.get('[id=firstName]').type("Eva")
    })
    it('Should fill the lastname field', () => {
        cy.get('[id=lastName]').type("Cozésouci")
    })
    it('Should fill the email field', () => {
        cy.get('[id=signup-email]').type("eva.coze@yopmail.com")
    })
    it('Should fill the password field', () => {
        cy.get('[id=signup-password]').type("M@steR42")
    })
    it('Should click on validate button', () => {
        cy.get('[data-qa=signup-submit-button]').click()
    })
})