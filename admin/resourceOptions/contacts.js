const AdminJS = require('adminjs')
const ContactsModel = require('../../models/Contacts')

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: ['address', 'phone', 'workTime', 'clientMail', 'socials'],
  editProperties: ['address', 'phone', 'workTime', 'clientMail', 'socials'],
  navigation: {
    icon: 'Information',
  },
}

module.exports = {
  options,
  resource: ContactsModel,
}
