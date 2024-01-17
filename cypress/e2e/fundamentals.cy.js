/*The DESCRIBE block can be use as a 
TEST SUIT as it contains several test cases*/
//First Argument = the Test Description "Title"
//Second Argument = Callback funtion.
//Inside the Argument of the First Function, I'll have my test
/*The IT Block is one test*/
//First Argument = the Test Description "Title"
//Second Argument = Callback funtion.
//Inside the Argument of the First Function, I'll have my test
//Cy is Cypress object that contains several methods to perform any needed action.
describe('Fundamentals Tests', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {  
    cy.getDataTest('fundamentals-header').contains(/Testing Fundamentals/i); 
  })
  it('Should contain correct header text', () => {
    cy.getDataTest('fundamentals-header').should('contain.text','Testing Fundamentals');
  })

  //Within option
  it('Accordion Option Text Displays Upon Click and Hides When Deselected or Clicked Again', () => {
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
    cy.getDataTest('accordion-item-1').click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.getDataTest('accordion-item-1').within(()=>{
      cy.get('div[role="button"]').click()
      cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
    })
  })

  //find option
  it.only('Accordion Option Text Displays Upon Click and Hides When Deselected or Clicked Again', () => {
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
    cy.getDataTest('accordion-item-1').click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.getDataTest('accordion-item-1').find('div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
  
  })
})

//CAN NOT DECLARE VARIABLES, MUST USE .THEN TO GRAB ELEMENT, AND THE WRAP TO DO AN ASSERTION.