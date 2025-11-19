// import { expect } from 'chai';

describe('template spec', () => {
    it('Find and select a store', function() {
        cy.visit('https://www.joejuice.com/');
        cy.get('#coiPage-1 button.coi-banner__accept').click();
        cy.get('[data-cy="pickup-button"]').click();
        cy.get('[data-cy="store-search"]').type('Immervad 2-8, Aarhus C');
        cy.get('span').contains('Immervad').click();
        cy.get('p').contains('Aarhus Hovedbanegaard. Aarhus').click();
        cy.get('h1 span').contains('Pickup').should('exist');
    });
});

