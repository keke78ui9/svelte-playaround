/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      
      cy.visit('http://www-dvm-loopnet.com/auction', )
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('test custom element html', () => {
        
        cy.get('my-app').shadow().contains('h1', 'Hello yo!');

        cy.get('my-app').shadow().contains('h2', 'yo');

    })
  
    
  })
  