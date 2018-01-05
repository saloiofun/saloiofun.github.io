const router = require('express').Router()
const controller = require('../../controllers/websiteController')

// Matches with "/api/websites"
router.route('/')
  .get(controller.findWebsiteAll)
  .post(controller.createWebsite)

// Matches with "/api/websites/:id"
router.route('/:id')
  .get(controller.findWebsiteById)
  .put(controller.updateWebsite)
  .delete(controller.deleteWebsite)

module.exports = router
