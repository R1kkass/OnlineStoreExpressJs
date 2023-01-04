const Router = require('express')
const router = new Router()
const feedbackController = require('../controller/feedbackController')
const checkRole = require('../middleware/checkMiddleWare')

router.post('/', feedbackController.create)
router.post('/fetch', feedbackController.getAll)
router.post('/delete', checkRole('ADMIN'), feedbackController.delete)

module.exports=router