import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
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

// update new User
router.put("/:id", verifyUser, updateUser);
// delete new User
router.delete("/:id", verifyUser, deleteUser);
// get single User
router.get("/:id", verifyUser, getSingleUser);
// get All User
router.get("/", verifyAdmin, getAllUser);



// get all payments
router.get("/payment", verifyToken, verifyAdmin, getPayments);
// make payment
router.post("/payment", verifyToken, makePayment);

// get my payments
router.get("/payment/my", verifyToken, getMyPayments);
// get payment by id
router.get("/payment/:id", verifyToken, getPaymentById);
// get payment by user id
router.get("/payment/user/:id", verifyToken, verifyAdmin, getPaymentByUserId);
// get payment by plane ticket id
router.get("/payment/plane-ticket/:id", verifyToken, verifyAdmin, getPlaneTicketPaymentsById);
// get payment by tour id
router.get("/payment/tour/:id", verifyToken, verifyAdmin, getTourPaymentsById);

router.get("/payment/guide-service/:id", verifyToken, verifyAdmin, getGuideServicePaymentsById);


export default router;
