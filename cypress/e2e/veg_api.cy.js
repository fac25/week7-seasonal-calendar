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

    it('Api index zero has month of January', () => {
        cy.request('http://localhost:3000/api/vegdata').then((response) => {
            expect(response.body[0].name).to.eq('January')
            expect(response.body[11].name).to.eq('December')
        })
    })

    it('Index 5 of object has a seasonIndex value of 5', () => {
        cy.request('http://localhost:3000/api/vegdata').then((response) => {
            expect(response.body[5].seasonIndex).to.eq(5)
        })
    })
})
