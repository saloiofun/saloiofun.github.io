const db = require('../models')

// Defining methods for the Controller
module.exports = {
  findWebsiteById: function (req, res) {
    db.Website
      .findById({_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findWebsiteAll: function (req, res) {
    db.Website
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  createWebsite: function (req, res) {
    db.Website
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  updateWebsite: function (req, res) {
    db.Website
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  deleteWebsite: function (req, res) {
    db.Website
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
