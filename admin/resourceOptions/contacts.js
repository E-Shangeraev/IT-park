const AdminJS = require('adminjs')
const ContactsModel = require('../../models/Contacts')

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: ['address', 'phone', 'workTime', 'clientMail', 'careerMail'],
  editProperties: ['address', 'phone', 'workTime', 'clientMail', 'careerMail'],
  navigation: {
    icon: 'Information',
  },
}

module.exports = {
  options,
  resource: ContactsModel,
}
