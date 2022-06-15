describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });

  it("Links are working", () => {
    ;
    cy.findByRole("navigation").findByText("Projects").click();
    cy.url().should("eq", "http://localhost:3000/");

    cy.findByRole("navigation").findByText("Issues").click();
    cy.url().should("eq", "http://localhost:3000/issues");
  });

  it("is collapsible", () => {
    cy.findByText("Collapse").click();
    cy.findByRole("navigation").findAllByRole("link").should("have.length", 5);
    cy.findByRole("navigation").findByText("Issues").should("not.exist")

  })
});

export { };
