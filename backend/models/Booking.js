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
      default: null,
    },
    guideId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Guide",
      default: null,
    },
    planeTicketId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "PlaneTicket",
      default: null,
    },
    guestSize: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
