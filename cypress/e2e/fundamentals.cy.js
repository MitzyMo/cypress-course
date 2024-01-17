/*The DESCRIBE block can be use as a 
TEST SUIT as it contains several test cases*/
//First Argument = the Test Description "Title"
//Second Argument = Callback funtion.
//Inside the Argument of the First Function, I'll have my test
describe('Fundamental Test', () => {
/*The IT Block is one test*/
  it('passes', () => {
//First Argument = the Test Description "Title"
//Second Argument = Callback funtion.
//Inside the Argument of the First Function, I'll have my test
    cy.visit('http://localhost:3000/fundamentals')
//Cy is Cypress object that contains several methods to perform any needed action.
    cy.get().contains()
  })
})

//CAN NOT DECLARE VARIABLES, MUST USE .THEN TO GRAB ELEMENT, AND THE WRAP TO DO AN ASSERTION.