import express from 'express'
import {
  createTour, 
  deleteTour, 
  getAllTour, 
  getFeaturedTour, 
  getSingleTour, 
  getTourBySearch, 
  updateTour,
  getTourCount,
} from './../controllers/tourController.js';

const router = express.Router();

// create new tour
router.post('/', createTour);

// update new tour
router.put('/:id', updateTour);

// delete new tour
router.delete('/:id', deleteTour);

// get single tour
router.get('/:id', getSingleTour);

// get All tour
router.get('/', getAllTour);


//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;