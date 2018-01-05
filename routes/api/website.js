const router = require('express').Router()
const controller = require('../../controllers/websiteController')

// Matches with "/api/website"
router.route('/')
  .get(controller.findAll)
  .post(controller.create)

// Matches with "/api/website/:id"
router.route('/:id')
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.delete)

module.exports = router
