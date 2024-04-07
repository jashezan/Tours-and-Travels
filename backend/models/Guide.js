// a tour guide model schema

import mongoose from "mongoose";

const GuideSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    pricePerHour: {
      type: Number,
      required: true,
      default: Math.floor(Math.random() * 100),
    },
    rating: {
      type: Number,
      required: true,
      default: Math.floor(Math.random() * 5),
    },
  },
  {
    timestamps: true,
  }
);

const Guide = mongoose.model("Guide", GuideSchema);
export default Guide;