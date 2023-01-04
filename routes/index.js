const Router = require('express')
const router = new Router()

const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const buyRouter = require('./buyRouter')
const basketRouter = require('./basketRouter')
const feedbackRouter = require('./feedbackRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/devices', deviceRouter)
router.use('/brand', brandRouter)
router.use('/buy', buyRouter)
router.use('/basket', basketRouter)
router.use('/feedback', feedbackRouter)

module.exports=router