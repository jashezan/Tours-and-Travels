import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";
import guideRoute from "./routes/guide.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const corsOptions = {
  origin: true,
  credentials: true,
};

//database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB database connected");
  } catch (err) {
    console.error("MongoDB database connection failed");
    console.error(err);
  }
};

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(cookieParser());

// routes
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/guides", guideRoute);

try {
  app.listen(port, () => {
    connect();
    console.log("Server listening on port", port);
  });
} catch (error) {
  console.error("Server connection failed");
  console.error(error);
  process.exit(1);
}
