const express = require('express');
const ToursController = require('./../Controller/ToursController');

const authController = require('./../Controller/authController');

const router = express.Router();

router
  .route('/top-5-cheap')
  .get(ToursController.aliasTopTours, ToursController.GetAllTours);

router.route('/tour-stats').get(ToursController.getTourStats);

router.route('/monthly-plan/:year').get(ToursController.getMonthlyPlan);

router
  .route('/')
  .get(authController.protect, ToursController.GetAllTours)
  .post(ToursController.CreateTour);

router
  .route('/:id')
  .get(ToursController.GetTour)
  .patch(ToursController.UpdateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    ToursController.DeleteTour
  );

module.exports = router;
