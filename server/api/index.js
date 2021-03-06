const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/class', require('./classDetail'))
router.use('/contact', require('./contactForm'))
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
