import express from 'express'
import {
  createTour, 
  deleteTour, 
  getAllTour, 
  getSingleTour, 
  updateTour,
} from './../controllers/tourController.js';

const router = express.Router()

// create new tour
router.post('/', createTour);

// update new tour
router.put('/:id', updateTour)

// delete new tour
router.post('/:id', deleteTour)

// get single tour
router.get('/:id', getSingleTour)

// getAll new tour
router.get('/:id', getAllTour)

 
export default router;