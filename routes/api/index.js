const router = require('express').Router()
const websiteRoutes = require('./website')

// Website routes
router.use('/website', websiteRoutes)

module.exports = router
