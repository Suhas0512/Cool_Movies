const express=require('express')
const router=express.Router()
const usersController=require('../app/controllers/UsersController')
const moviesController=require('../app/controllers/MoviesController')
const reviewsController=require('../app/controllers/ReviewsController')
const authenticateUser=require('../app/middlewares/authentication')

router.post('/register',usersController.register)
router.post('/login',usersController.login)
router.get('/account',usersController.account)
router.delete('/logout',usersController.logout)

router.get('/movies',moviesController.list)
router.get('/movies/:id',moviesController.show)
router.post('/movies',moviesController.create)
router.put('/movies/:id',moviesController.update)
router.delete('/movies/:id',moviesController.destroy)

router.get('/reviews',reviewsController.list)
router.get('/reviews/:id',reviewsController.show)
router.post('/reviews',reviewsController.create)
router.put('/reviews/:id',reviewsController.update)
router.delete('/reviews/:id',reviewsController.destroy)

module.exports=router