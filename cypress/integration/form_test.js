describe('pizza test' , function () {
    it('test pizza form', () => {
        cy.visit('http://localhost:3000/components/Form')

        cy.get('#name')
        .type('Angela')
        .should('have.value', 'Angela')

        cy.get('[for="pizzaSize"] > select').select('Small')

        cy.get('[htmlform="pepperoni"] > input').check({ force: true }).should('be.checked')  

    })
})