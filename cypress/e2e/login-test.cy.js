describe('Pruebas de UI en Automation Exercise', () => {
    it('Inicio de Sesión Exitoso', () => {
        cy.visit('https://automationexercise.com/login');

        // Ingresar correo y contraseña
        cy.get('[data-qa="login-email"]').type('migueltest01@gmail.com');
        cy.get('[data-qa="login-password"]').type('Password123');

        // Hacer clic en el botón de login
        cy.get('[data-qa="login-button"]').should('be.visible').click();

        // Validar que el login fue exitoso verificando la opción "Logout"
        cy.contains('Logout').should('be.visible');
    });
});
