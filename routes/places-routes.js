const express = require('express');
const { check } = require('express-validator');
const {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlace,
  deletePlace,
} = require('../controllers/places-controller');

const router = express.Router();

router.get('/:pid', getPlaceById);

router.get('/user/:uid', getPlacesByUserId);

router.post(
  '/',
  [
    check('title').not().isEmpty(),
    check('description').not().isEmpty().isLength({ min: 5 }),
    check('address').notEmpty(),
  ],
  createPlace
);

router.patch('/:pid', updatePlace);

router.delete('/:pid', deletePlace);

module.exports = router;
