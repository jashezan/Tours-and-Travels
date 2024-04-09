import express from "express";
import {
  makeBooking,
  getAllBooking,
  getBookingById,
  cancelBooking,
  getBookingByUserId,
  getMyBooking,
  makePayment,
  getAllPlaneTicket,
  deleteBooking
} from "../controllers/bookingController.js";

import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, verifyAdmin, getAllBooking); // queries: status, type, page, limit
router.post("/", verifyToken, verifyUser, makeBooking);
router.get("/plane-ticket", getAllPlaneTicket); // queries: page, limit
router.get("/mybooking", verifyToken, verifyUser, getMyBooking); // queries: status, page, limit
router.post("/payment/:id", verifyToken, verifyUser, makePayment);
router.get("/user/:id", verifyToken, verifyUser, getBookingByUserId); // queries: status, page, limit
router.patch("/cancel/:id", verifyToken, verifyUser, cancelBooking);
router.delete("/:id", verifyAdmin, deleteBooking);
router.get("/:id", verifyToken, getBookingById);

export default router;
