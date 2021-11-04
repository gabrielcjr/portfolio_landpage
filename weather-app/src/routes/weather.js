import 'dotenv/config';
import express from 'express';
import weather from '../controllers/weather.js';

let weatherRouter = express.Router();

// This param will receive each city that is input by the user.
weatherRouter.param('city', (req, res, next, id) => {
  req.city = id;
  next();
});

// This get route will handle all the core functions to display the page with parsed JSON data from Accuweather API
weatherRouter.get('/:city', weather);

export default weatherRouter;