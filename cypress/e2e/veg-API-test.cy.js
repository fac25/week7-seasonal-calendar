describe('Test vegetable data end point', () => {
    it('Check status code is okay', () => {
        cy.request('http://localhost:3000/api/vegdata').then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Check for one object per month', () => {
        cy.request('http://localhost:3000/api/vegdata')
            .its('body')
            .should('have.length', 12)
    })
})
