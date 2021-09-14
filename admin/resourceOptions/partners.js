const AdminJS = require('adminjs')
const PartnersModel = require('../../models/Partner')
const features = require('../features')

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: ['index', 'name', 'url', 'uploadedFile'],
  editProperties: ['index', 'name', 'url', 'uploadedFile'],
  navigation: {
    icon: 'Partnership',
  },
  properties: {
    mimeType: { isVisible: false },
  },
}

module.exports = {
  options,
  resource: PartnersModel,
  features,
}
