
const data = require('./data')

module.exports = app => {
  app.use('/data', data);
}