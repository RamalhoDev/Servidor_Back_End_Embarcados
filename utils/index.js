const util = require('./data')

module.exports = app => {
  app.use('/util', utils);
}