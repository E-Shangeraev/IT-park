const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['phone', 'clientMail', 'careerMail'],
  editProperties: ['phone', 'clientMail', 'careerMail'],
  navigation: {
    icon: 'Bullhorn',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = options
