describe ('Testing Forms',()=>{
    beforeEach(()=>{
        cy.visit('/forms')
    })
    it('Testing Subscribe option',()=>{
        //Happy Path
        cy.contains(/Testing Forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('mitzy.93@gmail.com')
        cy.contains(/Successfully subbed: mitzy.93@gmail.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: mitzy.93@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: mitzy.93@gmail.com!/i).should('not.exist')
        //Path with incorrect email
        cy.get('@subscribe-input').type('mitzy.93@gmail.io')
        cy.contains(/invalid email: mitzy.93@gmail.io!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/invalid email: mitzy.93@gmail.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/invalid email: mitzy.93@gmail.io!/i).should('not.exist')
        //Path with no data in email box
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')
        cy.wait(3000)
        cy.contains(/fail!/i).should('not.exist')
    
    
    })
})



