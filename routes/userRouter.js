const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth') 

const router = require('express').Router()
//create app.use then go to server.js and create route under // Routes
 //app.use('/user', require('./routes/userRouter'))  to test router
 //test in postman post localhost5000/user/register  /user is from app.use in server, and /register is from router.post  in userRouter
 // post is from router.post
//    router.post('/register', (req,res) =>{
 //   res.json({msg: "Test Router"})})

 //new way now
router.post('/register',userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor', auth,  userCtrl.getUser)


module.exports = router