const AdminBro = require('admin-bro')
const { Subject } = require('../../models/Subject')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['name'],
  editProperties: ['name'],
  navigation: {
    icon: 'Notebook',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = {
  options,
  resource: Subject,
}
