// making a schema for plane ticket booking for a tour in tour package
import mongoose from "mongoose";

const PlaneTicketSchema = new mongoose.Schema(
  {
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    passengerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    departureAirport: {
      type: String,
      required: true,
    },
    arrivalAirport: {
      type: String,
      required: true,
    },
    departureDate: {
      type: Date,
      required: true,
    },
    arrivalDate: {
      type: Date,
      required: true,
    },
    departureTime: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PlaneTicket = mongoose.model("PlaneTicket", PlaneTicketSchema);
