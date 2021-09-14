const PartnerModel = require('../models/Partner.js')
require('dotenv').config()

class PartnerController {
  async getItems(req, res) {
    try {
      let items = await PartnerModel.find().sort({ index: 1 })
      items = items.map(item => {
        const copy = Object.assign({}, item._doc)
        copy.image = item.uploadedFile
          ? process.env.AWSURI + item.uploadedFile.path
          : null
        return copy
      })
      res.status(200).json(items)
    } catch (err) {
      res.status(400)
      throw err
    }
  }
}

module.exports = new PartnerController()
