describe("Examples Cypress", () => {
    beforeEach(() => {
        cy.visit("/examples");
    });
    it("Multi Page Testing", () => {
        cy.getDataTest("nav-why-cypress").click();
        cy.location("pathname").should("equal", "/");
        cy.getDataTest("nav-overview").click();
        cy.location("pathname").should("equal", "/overview");
        cy.getDataTest("nav-fundamentals").click();
        cy.location("pathname").should("equal", "/fundamentals");
        cy.getDataTest("nav-forms").click();
        cy.location("pathname").should("equal", "/forms");
        cy.getDataTest("nav-component").click();
        cy.location("pathname").should("equal", "/component");
        cy.getDataTest("nav-best-practices").click();
        cy.location("pathname").should("equal", "/best-practices");
        cy.getDataTest("nav-examples").click();
        cy.location("pathname").should("equal", "/examples");
    });
    it("Incercepts", () => {
        cy.intercept("POST", "http://localhost:3000/examples", {
        fixture: "example.json",
        });
        cy.getDataTest("post-button").click();
    });

    //cy.its(Access different propreties or different indexes an array)
    //cy.invoke(Invoke JS methods to be applied to Cypress objects)
    //cy.request(To make HTTP Request)
    //cy.whithin(Access to children elements with in the parent element)

    it.only("GrudgeList", () => {
        //Verify Title
        cy.contains(/Add Some Grudges/i);
        //Verify empty input
        cy.getDataTest("grudge-input").within(() => {
        cy.get("input").should("be.empty");
        });
        //Verify empty list
        cy.getDataTest("grudge-list").within(() => {
        cy.get("li").should("have.length", 0);
        });
        //Verify the Clear button is not visible
        cy.getDataTest('clear-button').should('not.exist')
        //Verify the Title 
        cy.getDataTest('grudge-list-title').should('have.text','Add Some Grudges')
        //Input first Grudge
        cy.getDataTest("grudge-input").within(() => {
        cy.get("input").type("my first grudge");
        });
        //Verify list has a length of 0
        cy.getDataTest("grudge-list").within(() => {
        cy.get("li").should("have.length", 0);
        });
        //Add the Grudge
        cy.getDataTest("add-grudge-button").click();
        //Verify list has a length of 1
        cy.getDataTest("grudge-list").within(() => {
        cy.get("li").should("have.length", 1);
        });
        //Verify Title changes 
        cy.getDataTest('grudge-list-title').should('have.text','Grudges')
        //Input second Grudge
        cy.getDataTest("grudge-input").within(() => {
        cy.get("input").type("my second grudge");
        });
        //Add the Grudge
        cy.getDataTest("add-grudge-button").click();
        //Verify list has a length of 2 and verify the first grudge
        cy.getDataTest("grudge-list").within(() => {
        cy.get("li").should("have.length", 2);
        cy.get("li").its(0).should("contains.text", "my first grudge");
        });
        //Verify the option to remove the grudge
        cy.getDataTest("grudge-list").within(() => {
        cy.get("li")
            .its(0)
            .within(() => {
            cy.get("button").click();
            });
        });
        //Verify list has a length of 1
        cy.getDataTest("grudge-list").within(() => {
        cy.get("li").should("have.length", 1);
        });
        //Verify the clear button clears the list
        cy.getDataTest('clear-button').click()
            //Verify list has a length of 0
            cy.getDataTest("grudge-list").within(() => {
            cy.get("li").should("have.length", 0);
            });
    });
});
