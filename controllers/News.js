const News = require('../models/News.js')

class NewsController {
  async getItems(req, res) {
    try {
      const items = await News.find()
      res.status(200).json(items)
    } catch (err) {
      res.status(400)
      throw err
    }
  }
}

module.exports = new NewsController()
