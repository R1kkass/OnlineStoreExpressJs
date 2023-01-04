const Router = require('express')
const router = new Router()
const userController = require('../controller/userController')
const authMiddleware = require('../middleware/authMiddleware')
const authMiddlewareCheck = require('../middleware/authMiddlewareCheck')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.post('/authcheck', authMiddlewareCheck)
router.get('/getone', userController.getOne)

module.exports=router