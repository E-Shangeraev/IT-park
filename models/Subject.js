const { model, Schema } = require('mongoose')

const SubjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
})

const Subject = model('Subjects', SubjectSchema)

module.exports = { Subject, SubjectSchema }
