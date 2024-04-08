import { Router } from "express";
import {
  getMyPayments,
  getPaymentById,
  getPayments,
  makePayment,
  getGuideServicePaymentsById,
  getPaymentByUserId,
  getPlaneTicketPaymentsById,
  getTourPaymentsById,
} from "../controllers/paymentController.js";

import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";


const router = Router()


// get all payments
router.get("/", verifyToken, verifyAdmin, getPayments);
// make payment
router.post("/", verifyToken, makePayment);

// get my payments
router.get("/my", verifyToken, getMyPayments);
// get payment by user id
router.get("/user/:id", verifyToken, verifyAdmin, getPaymentByUserId);
// get payment by plane ticket id
router.get("/plane-ticket/:id", verifyToken, verifyAdmin, getPlaneTicketPaymentsById);
// get payment by tour id
router.get("/tour/:id", verifyToken, verifyAdmin, getTourPaymentsById);
router.get("/guide-service/:id", verifyToken, verifyAdmin, getGuideServicePaymentsById);
// get payment by id
router.get("/:id", verifyToken, getPaymentById);

export default router;