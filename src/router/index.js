const router = require('express').Router()
const cartRoutesHandler = require('./cart')(router)
const productRoutesHandler = require('./product')(router)

router.use('/cart', cartRoutesHandler)
router.use('/product', productRoutesHandler)

module.exports = router
