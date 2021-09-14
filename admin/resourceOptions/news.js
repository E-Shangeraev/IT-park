const AdminJS = require('adminjs')
const NewsModel = require('../../models/News')
const features = require('../features')

/** @type {AdminJS.ResourceOptions} */
const options = {
  listProperties: ['title', 'text', 'date', 'uploadedFile'],
  editProperties: ['title', 'text', 'date', 'uploadedFile'],
  navigation: {
    icon: 'Bullhorn',
  },
  properties: {
    mimeType: { isVisible: false },
    text: {
      type: 'richtext',
    },
  },
}

module.exports = {
  options,
  resource: NewsModel,
  features,
}
