const Router = require('express')
const router = new Router()
const buyProduct = require('../controller/buyController')
const checkRole = require('../middleware/checkMiddleWare')

router.post('/all', buyProduct.createAll)
router.post('/', buyProduct.create)
router.get('/order', buyProduct.getAll)
router.get('/orderget', buyProduct.getOrder)
router.post('/ordergetadm', checkRole("ADMIN"), buyProduct.getOrderAdm)
router.post('/deleteorder', checkRole("ADMIN"), buyProduct.deleteOrder)
router.post('/editOrder', checkRole("ADMIN"), buyProduct.editOrder)

module.exports=router