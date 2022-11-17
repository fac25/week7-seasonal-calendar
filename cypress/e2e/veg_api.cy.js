describe('Test vegetable api data end point', () => {
    it('Check status code is correct and data is received', () => {
        cy.request('http://localhost:3000/api/vegdata').then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Api receives 12 objects, one for each month', () => {
        cy.request('http://localhost:3000/api/vegdata')
            .its('body')
            .should('have.length', 12)
    })
})
