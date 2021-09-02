const { model, Schema } = require('mongoose')

const ContactsSchema = new Schema({
  phone: String,
  clientMail: String,
  careerMail: String,
})

module.exports = model('Contacts', ContactsSchema)
