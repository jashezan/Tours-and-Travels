import mongoose, { Schema } from "mongoose";

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
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);