const restifyHandler = (req, res, err, callback) => {
  req.log.info(`Error thrown within restify: ${err}`);
  return callback();
};

module.exports = restifyHandler;
