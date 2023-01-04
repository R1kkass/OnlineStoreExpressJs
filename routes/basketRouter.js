const Router = require('express')
const router = new Router()
const basketController = require('../controller/basketController')
const checkRole = require('../middleware/checkMiddleWare')

router.post('/', basketController.create)
router.post('/find', basketController.getAll)
router.post('/delete', basketController.deleteOne)
router.post('/pluscount', basketController.plusCount)

module.exports=router
