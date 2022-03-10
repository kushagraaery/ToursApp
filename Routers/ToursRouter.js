const express = require('express');

const ToursController = require('./../Controller/ToursController');

const reviewsRouter = require('./../Routers/reviewsRouter');

const authController = require('./../Controller/authController');

const router = express.Router();

router.use('/:tourId/reviews', reviewsRouter);

router
  .route('/top-5-cheap')
  .get(ToursController.aliasTopTours, ToursController.GetAllTours);

router.route('/tour-stats').get(ToursController.getTourStats);

router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    ToursController.getMonthlyPlan
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(ToursController.getToursWithin);

router.route('/distances/:latlng/unit/:unit').get(ToursController.getDistances);

router
  .route('/')
  .get(ToursController.GetAllTours)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    ToursController.CreateTour
  );

router
  .route('/:id')
  .get(ToursController.GetTour)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    ToursController.UpdateTour
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    ToursController.DeleteTour
  );

module.exports = router;
