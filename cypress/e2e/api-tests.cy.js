describe('Pruebas de API', () => {
    it('Validar respuesta del endpoint /qa/test1', () => {
      cy.request('https://echo-serv.tbxnet.com/v1/qa/test1').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('ok', true);
      });
    });
  
    it('Validar error del endpoint /qa/test2', () => {
      cy.request({
        url: 'https://echo-serv.tbxnet.com/v1/qa/test2',
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(500);
      });
    });
  });