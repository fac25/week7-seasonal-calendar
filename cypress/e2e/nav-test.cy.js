describe('Navigate around website', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Should navigate to the recipes page', () => {
        cy.get("a[href*='recipes']").click()
        cy.url().should('include', '/recipes')
        cy.get('h1').contains('Recipes')
    })
    it('Should navigate to the calendar page', () => {
        cy.get("a[href*='seasonal-calendar']").click()
        cy.url().should('include', '/seasonal-calendar')
        cy.get('h1').contains('Calendar')
    })
})
