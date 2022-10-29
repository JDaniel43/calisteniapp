let Router = require('express').Router
let homeRouter = require('./web').router
const router = Router()

router.use('/', homeRouter)

exports.router = router;