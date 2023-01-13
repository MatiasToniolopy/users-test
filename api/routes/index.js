const router =  require('express').Router()
const users = require('../controllers/users.js')

router.use('/users', users)

module.exports = router;