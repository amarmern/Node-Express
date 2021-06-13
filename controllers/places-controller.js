const HttpError = require('../models/http-error');

const { v4: uuidv4 } = require('uuid');

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State building',
    description: 'One of the most famous sky scrappers in the word',
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: '20 W 34th St,New York, NY 1001',
    creator: 'u1',
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError('Could not find a place for the provided id.', 404);
  }

  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    return next(
      new HttpError('Could not find a place for the provided  user id.', 404)
    );
    // it is one way for handling..
    // return res
    //   .status(404)
    //   .json({ message: 'Could not find user to provided id.' });
  }

  return res.json({ place });
};

const createPlace = (req, res, next) => {
  const { title, description, cordinates, address, creator } = req.body;

  const createPlace = {
    id: uuidv4(),
    title,
    description,
    location: cordinates,
    address,
    creator,
  };

  DUMMY_PLACES.push(createPlace);

  res.status(201).json({ place: createPlace });
};

const updatePlace = (req, res, next) => {};

const deletePlace = (req, res, next) => {};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
