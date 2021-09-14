const { Router } = require('express')
const Partner = require('../controllers/Partner')
const router = Router()

router.get('/', Partner.getItems)

module.exports = router
