describe('Login Test', () => {
    it('should login successfully', () => {
        cy.visit('http://localhost:3000');
        cy.get('button[name="login"]').click();
        cy.get('input[name="email"]').type('tha00@gmail.com');
        cy.get('input[name="password"]').type('1234');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '');
        cy.get('span[class="menu-text-home"]').click();
        cy.get('span[class="dropdown-text-buy"]').click();
        cy.visit('http://localhost:3000/shop');


    });
});

