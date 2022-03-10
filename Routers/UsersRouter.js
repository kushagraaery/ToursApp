const express = require('express');
const UsersController = require('./../Controller/UsersController');
const authController = require('./../Controller/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', UsersController.getMe, UsersController.GetUser);
router.patch('/updateMe', UsersController.updateMe);
router.delete('/deleteMe', UsersController.deleteMe);

router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(UsersController.GetAllUsers)
  .post(UsersController.CreateUser);

router
  .route('/:id')
  .get(UsersController.GetUser)
  .patch(UsersController.UpdateUser)
  .delete(UsersController.DeleteUser);

module.exports = router;
