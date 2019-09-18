const fs = require('fs');
const testConfig = require('../../../config/test');
const httpsConfig = require('../../../config/test-https');

describe('The application base layer', function () {
  describe('A generic page in http', function () {
    it('should return a 404 not found', async function () {
      const app = testRequire('app');
      const server = await app.load(testConfig);
      app.start(server, testConfig);
      return request(server)
        .get('/this-page-will-never-exist')
        .then((response) => {
          expect(response).to.have.status(404);
        });
    });
  });

  describe.skip('A generic page in https', function () {
    it('should return a 404 not found', async function () {
      const app = testRequire('app');
      const server = await app.load(httpsConfig);
      app.start(server, httpsConfig);
      return request(server)
        .key(fs.readFileSync(httpsConfig.app.http2.key))
        .cert(fs.readFileSync(httpsConfig.app.http2.cert))
        .get('/this-page-will-never-exist')
        .then((response) => {
          expect(response).to.have.status(404);
        });
    });
  });
});
