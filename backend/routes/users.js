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
router.get("/all-payments", verifyToken, verifyAdmin, getPayments);
// get my payments
router.get("/my-payments", verifyToken, getMyPayments);
// get payment by id
router.get("/payment/:id", verifyToken, getPaymentById);

// make payment
router.post("/payment", verifyToken, makePayment);

export default router;
