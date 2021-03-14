it('Can click on board', () => {
  cy.visit('/');
  cy.get('.container div').first().click();
  cy.contains('X');
});
