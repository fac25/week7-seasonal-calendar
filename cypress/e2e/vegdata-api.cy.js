describe('Vegdata api', () => {
    it('Should hit api', () => {
        cy.intercept(
            {
                method: 'GET', // Route all GET requests
                url: '/api/vegdata', // that have a URL that matches '/users/*'
            },
            [] // and force the response to be: []
        ).as('getVegs') // and assign an alias
    })
})
