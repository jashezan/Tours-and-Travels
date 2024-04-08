import mongoose from "mongoose";
import { BOOKING_STATUS } from "../data/index.js";

// creating a schema for payment of tour or plane ticket or guide service or multiple services
const PaymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isTour: {
      type: Boolean,
      default: false,
    },
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
    },
    isPlaneTicket: {
      type: Boolean,
      default: false,
    },
    planeTicketId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PlaneTicket",
    },
    isGuideService: {
      type: Boolean,
      default: false,
    },
    guideServiceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guide",
    },
    status: {
      type: String,
      required: true,
      default: BOOKING_STATUS.PENDING,
    },
    paymentAmount: {
      type: Number,
      required: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;
