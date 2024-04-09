import express from "express";
import { createReview, deleteReview, getAllReviews } from "../controllers/reviewController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/", verifyAdmin, getAllReviews);
router.post("/:tourId", verifyUser, createReview);
router.delete("/:reviewId", verifyAdmin, deleteReview);


export default router;
