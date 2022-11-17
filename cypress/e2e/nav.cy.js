describe('Navigate around website', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('includes all elements on navbar', () => {
        cy.get('span').contains('home')
        cy.get('span').contains('seasonal recipes')
        cy.get('span').contains('seasonal calendar')
    })

    it('Should navigate to the recipes page', () => {
        cy.get("a[href*='seasonal-recipes']").click()
        cy.url().should('include', '/seasonal-recipes')
    })

    it('Should navigate to the calendar page', () => {
        cy.get("a[href*='seasonal-calendar']").click()
        cy.url().should('include', 'seasonal-calendar')
    })
})
