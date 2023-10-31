// ? --------------------------------------------------------------------------- Cypress test

describe("User Journy", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("A user can navagate through the site and search for a country", () => {
    cy.getByData("startup-message-hide").click();
    cy.getByData("searchbar-input-open-icon").click();
    cy.getByData("searchbar-input").type("spain").type("{enter}");
    // cy.getByData("country-info-box-close").click();
  });
});
