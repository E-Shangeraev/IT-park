const AdminJS = require('adminjs')
const ContactsModel = require('../../models/Contacts')

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: ['phone', 'clientMail', 'careerMail'],
  editProperties: ['phone', 'clientMail', 'careerMail'],
  navigation: {
    icon: 'Information',
  },
}

module.exports = {
  options,
  resource: ContactsModel,
}
