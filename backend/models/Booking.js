import mongoose, { Schema } from "mongoose";
import { BOOKING_STATUS } from "../data/index.js"

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    tourId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Tour",
    },
    guestSize: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      // this can be only pending, cancelled, completed
      type: String,
      required: true,
      default: BOOKING_STATUS.PENDING,
    },
    payment: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);