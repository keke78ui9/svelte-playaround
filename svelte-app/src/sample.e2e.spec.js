/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5000')
    })

    it('test hello word', () => {
  
      cy.contains('test')
  
    })
 
  })
  