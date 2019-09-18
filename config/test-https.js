module.exports = {
  app: {
    http2: {
      enabled: true,
      key:     'test/spec/helpers/certs/localhost-privkey.pem',
      cert:    'test/spec/helpers/certs/localhost-cert.pem',
    },
    name:     'restify-skeleton',
    hostname: 'localhost',
    port:     '8443',
  },
  logger: {
    level: 'info',
  },
};
