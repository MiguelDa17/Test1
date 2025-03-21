# Test1
Prueba de Cypress
=======
# Pruebas con Cypress para UI y API

## Descripción
Este proyecto contiene pruebas automatizadas utilizando Cypress para pruebas de UI y API. Las pruebas de UI cubren una plataforma de comercio electrónico, y las pruebas de API validan endpoints de un servidor de prueba.

## Instalación
1. Clona el repositorio:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución de Pruebas
### Pruebas de UI
1. Abre la interfaz de Cypress:
   ```bash
   npx cypress open
   ```
2. Ejecuta el archivo de prueba de UI desde el Cypress Test Runner.

### Pruebas de API
Ejecuta las pruebas de API en modo headless:
```bash
npx cypress run --spec "cypress/e2e/api-tests.cy.js"
```

## Casos de Prueba Implementados
### Pruebas de UI
- **Registro de Usuario:** Verifica que un nuevo usuario pueda ser creado con éxito.
- **Flujo de registro:** Asegura que los usuarios puedan iniciar sesión correctamente.
- **Flujo de Inicio de Sesión:** Validar que el usuario registrado se pueda loguear.

### Pruebas de API
- **Validación de Endpoints:** Envía solicitudes a la API proporcionada y verifica las respuestas.

## Estructura de Carpetas
```
project-folder/
│── cypress/
│   ├── e2e/
│   │   ├── api-tests.cy.js
│   │   ├── login-tests.cy.js
│   │   ├── registro-tests.cy.js
│── cypress.config.js
│── package.json
│── README.md
```

## Reporte de Problemas
Si encuentras algún problema o deseas sugerir mejoras, siéntete libre de abrir un issue en el repositorio.

