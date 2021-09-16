/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/// <reference types="cypress" />

describe('Duro Challenge', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Has Approve button', () => {
    cy.contains('Approve')
      .click()
      .and('be.visible');
  });

  it('Has product name', () => {
    cy.contains('Amazing Product');
  });

  it('Has product company', () => {
    cy.contains('Amazing Company');
  });

  it('Has product description', () => {
    cy.contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });

  it('Has CPN', () => {
    cy.contains('89-00001');
  });

  it('Has EID', () => {
    cy.contains('122-00987');
  });

  it('Has Created By', () => {
    cy.contains('Michael Corr');
  });

  it('Has Status Approved', () => {
    cy.contains('Approved');
  });

  it('Has Status In Progress', () => {
    cy.contains('In Progress');
  });

  it('Has Success', () => {
    cy.contains('Success');
  });

  it('Does not exist Rejected', () => {
    cy.contains('Rejected')
      .should('not.exist');
  });
});
