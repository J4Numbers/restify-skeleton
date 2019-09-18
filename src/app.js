const uuid = require('uuid/v4');
const restify = require('restify');

const loggerEngine = require('./lib/logger');
const routingEngine = require('./lib/routes');
const onEventHandlers = require('./lib/middleware/on_handlers');
const preRequestHandlers = require('./lib/middleware/pre_handlers');


const load = async (props) => {
  const log = loggerEngine.bunyanLogger();
  const server = restify.createServer({
    name:                props.app.name,
    url:                 props.app.hostname,
    ignoreTrailingSlash: true,
    log,
  });

  server.pre(restify.plugins.pre.dedupeSlashes());
  server.pre(restify.plugins.pre.sanitizePath());
  preRequestHandlers(server);

  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.bodyParser());

  server.use(restify.plugins.requestLogger({
    properties: {
      'correlation-id': uuid(),
    },
  }));

  onEventHandlers(server);
  routingEngine(server);

  return server;
};

const start = (server, props) => {
  server.listen(props.app.port, props.app.hostname, () => {
    server.log.info(`${server.name} listening at ${server.url}`);
  });
};

module.exports = {
  load,
  start,
};
