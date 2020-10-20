const router = require('express').Router()
const cartRoutesHandler = require('./cart')(router)

router.use('/cart', cartRoutesHandler)

/*
 * TODO: перенести роутинг из src/index.js
 * */
// router.all('/products', require('./products'))

module.exports = router
