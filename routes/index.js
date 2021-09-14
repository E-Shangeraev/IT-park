const buildAdminRouter = require('./admin')
const mailRouter = require('./mail')
const newsRouter = require('./news')
const contactsRouter = require('./contacts')
const partnerRouter = require('./partners')

module.exports = {
  buildAdminRouter,
  mailRouter,
  newsRouter,
  contactsRouter,
  partnerRouter,
}
