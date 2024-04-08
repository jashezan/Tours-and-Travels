import mongoose from "mongoose";
import { USER_ROLE } from "../data/index.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    role: {
      type: String,
      default: USER_ROLE.USER,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
