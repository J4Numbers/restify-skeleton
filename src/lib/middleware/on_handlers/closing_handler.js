const { bunyanLogger } = require('../../logger');

const closingHandler = () => {
  const logger = bunyanLogger({});
  logger.info('Closing down server...');
};

module.exports = closingHandler;
