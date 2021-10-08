"use strict";

beforeEach(() => {
  cy.task("resetDb");
});

describe("list items", () => {
  it("displays a list of items", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Dune");

    cy.contains("T-Shirt");
    cy.contains("Goofy movie");
    cy.contains("Perfume");
    cy.contains("Eames Chair");
  });
});

describe("create item", () => {
  it("can create a new item", () => {
    cy.visit("/");
    cy.get("input[name='new_user'").type("danilo");
    cy.get("input[name='product_name'").type("Mattress");
    cy.get("input[name='product_description'").type(
      "Better than sleeping on the floor"
    );
    cy.get("input[name='product_price'").type("20.99");
    cy.get("input[type='numeric']").click();
    cy.contains("Mattress");
  });
});

// describe("delete item", () => {
//   it("can delete an item", () => {
//     cy.visit("/");
//     cy.get("button[aria-label='Delete Sery1976'").click();
//     cy.contains("Sery1976").should("not.exist");
//   });
// });
