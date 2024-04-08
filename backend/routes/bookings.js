import express from "express";
import {
  createBooking,
  getAllBooking,
  getBooking,
  cancelBooking,
  getBookingByUserId,
  getMyBooking,
} from "../controllers/bookingController.js";

import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, verifyAdmin, getAllBooking); // queries: status, page, limit
router.post("/", verifyToken, verifyUser, createBooking);
router.get("/mybooking", verifyToken, verifyUser, getMyBooking); // queries: status, page, limit
router.get("/user/:id", verifyToken, verifyUser, getBookingByUserId); // queries: status, page, limit
router.patch("/cancel/:id", verifyToken, verifyUser, cancelBooking);
router.get("/:id", verifyToken, verifyUser, getBooking);

export default router;
