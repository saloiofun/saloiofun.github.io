const mongoose = require('mongoose')
const Schema = mongoose.Schema

const websiteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  github: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Website = mongoose.model('Website', websiteSchema)

module.exports = Website
