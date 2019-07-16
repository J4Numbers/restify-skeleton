const localsStarter = (req, res, next) => {
  res.locals = {};
  next();
};

module.exports = localsStarter;
