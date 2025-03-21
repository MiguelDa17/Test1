describe('Pruebas de UI en Automation Exercise', () => {
    it('Registro Exitoso y Validación de Redirección', () => {
        cy.visit('https://automationexercise.com/login');

        // Llenar formulario de registro
        cy.get('[data-qa="signup-name"]').type('Test Miguel');
        cy.get('[data-qa="signup-email"]').type('migueltest11@gmail.com'); // Se debe modificar el correo para validar el registro de forma correcta
        cy.get('[data-qa="signup-button"]').should('be.visible').click();

        // Esperar la redirección al formulario de registro
        cy.url().should('include', '/signup');

        // Llenar los datos adicionales del formulario
        cy.get('[data-qa="password"]').type('Password123');
        cy.get('[data-qa="days"]').select('15');
        cy.get('[data-qa="months"]').select('June');
        cy.get('[data-qa="years"]').select('1995');
        cy.get('[data-qa="first_name"]').type('Miguel');
        cy.get('[data-qa="last_name"]').type('Tester');
        cy.get('[data-qa="company"]').type('Automation Inc.');
        cy.get('[data-qa="address"]').type('123 Test Street');
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type('California');
        cy.get('[data-qa="city"]').type('Los Angeles');
        cy.get('[data-qa="zipcode"]').type('90001');
        cy.get('[data-qa="mobile_number"]').type('1234567890');

        // Click en el botón de creación de cuenta
        cy.get('[data-qa="create-account"]').should('be.visible').click();

        // Esperar la redirección a /account_created
        cy.url().should('include', '/account_created');

        // Hacer clic en el botón "Continue"
        cy.get('[data-qa="continue-button"]').should('be.visible').click();

        // Validar que la URL final sea la página principal
        cy.url().should('eq', 'https://automationexercise.com/');
    });
});
