const restifyHandler = (req, res, err, callback) => {
  req.log.info(`Error thrown within restify: ${err}`);
  err.toJSON = () => ({
    message:    err.message,
    statusCode: res.statusCode,
  });
  return callback();
};

module.exports = restifyHandler;
