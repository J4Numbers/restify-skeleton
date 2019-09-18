const testConfig = require('../../../config/test');

describe('The application base layer', function () {
  describe('The index page', function () {
    it('should return a 404 not found', async function () {
      const app = testRequire('app');
      const server = await app.load(testConfig);
      app.start(server, testConfig);
      return request(server)
        .get('/')
        .then((response) => {
          expect(response).to.have.status(404);
        });
    });
  });
});
