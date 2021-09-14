const { model, Schema } = require('mongoose')

const PartnerSchema = new Schema({
  index: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  uploadedFile: { type: JSON, required: false },
})

module.exports = model('Partners', PartnerSchema)
