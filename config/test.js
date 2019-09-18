module.exports = {
  app: {
    http2: {
      enabled: false,
      key:     '/path/to/key/file',
      cert:    '/path/to/cert/file',
    },
    name:     'restify-skeleton',
    hostname: 'localhost',
    port:     '8080',
  },
  logger: {
    level: 'info',
  },
};
