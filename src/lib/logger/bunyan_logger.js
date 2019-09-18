const bunyan = require('bunyan');

let logger;

const createLogger = (props) => bunyan.createLogger({
  name:  props.app.name,
  level: props.logger.level,
});

module.exports = (props) => {
  if (logger === undefined) {
    logger = createLogger(props);
  }
  return logger;
};
