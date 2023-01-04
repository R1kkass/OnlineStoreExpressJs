const Router = require('express')
const router = new Router()
const deviceController = require('../controller/deviceController') 
const checkRole = require('../middleware/checkMiddleWare')

router.post('/', checkRole('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)
router.post('/delete', checkRole('ADMIN'), deviceController.deleteDevice)

module.exports=router


