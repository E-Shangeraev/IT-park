const { model, Schema } = require('mongoose')

const ContactsSchema = new Schema({
  address: String,
  phone: String,
  clientMail: String,
  careerMail: String,
  workTime: String,
})

module.exports = model('Contacts', ContactsSchema)
