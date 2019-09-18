const restifyHandler = require('./restify_handler');
const outboundLogger = require('./outbound_logger');
const closingHandler = require('./closing_handler');

const onEventHandler = (server) => {
  server.on('restifyError', restifyHandler);
  server.on('after', outboundLogger);
  server.on('close', closingHandler);
};

module.exports = onEventHandler;
