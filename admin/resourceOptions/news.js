const AdminBro = require('admin-bro')
const News = require('../../models/News')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['title', 'text', 'date', 'uploadedFile'],
  editProperties: ['title', 'text', 'date', 'uploadedFile'],
  navigation: {
    icon: 'Bullhorn',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = options
