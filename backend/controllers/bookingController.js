import Booking from "../models/Booking.js";
import { BOOKING_STATUS } from "../data/index.js";

// create new booking
export const createBooking = async (req, res) => {
  const { userId, tourId, guestSize, phone } = req.body;
  const newBooking = new Booking({
    userId,
    tourId,
    guestSize,
    phone,
    payment,
    status: BOOKING_STATUS.PENDING,
  });
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "your tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: "internal server error" });
  }
};

// get single booking
export const getBooking = async (req, res) => {
  const id = req.params?.id;
  if (!id)
    return res.status(400).json({ success: false, message: "id is required" });

  try {
    const book = await Booking.findById(id);

    res.status(200).json({
      success: true,
      message: "successful",
      data: book,
    });
  } catch (err) {
    res.status(404).json({ success: true, message: "not found" });
  }
};

// get all booking
export const getAllBooking = async (req, res) => {
  try {
    // queries all the bookings by status
    let { status, page, limit } = req.query;
    const bookingStatus = status?.trim();
    limit = parseInt(limit) || 10;
    page = (parseInt(page) - 1 || 0) * limit;
    console.log(bookingStatus, page, limit);
    if (bookingStatus) {
      const books = await Booking.find({ status: bookingStatus })
        .populate("tourId", "title city address")
        .populate("userId", "username email role")
        .sort({ createdAt: -1 }) // Sort by creation date descending
        .skip(page)
        .limit(limit);
      res.status(200).json({
        success: true,
        message: "successful",
        data: books,
      });
    } else {
      const books = await Booking.find()
        .populate("tourId", "title city address")
        .populate("userId", "username email role")
        .sort({ createdAt: -1 }) // Sort by creation date descending
        .skip(page)
        .limit(limit);
      res.status(200).json({
        success: true,
        message: "successful",
        data: books,
      });
    }
  } catch (err) {
    res.status(500).json({ success: true, message: "internal server error" });
  }
};

// cancel booking
export const cancelBooking = async (req, res) => {
  const id = req.params?.id;
  if (!id)
    return res.status(400).json({ success: false, message: "id is required" });

  try {
    const book = await Booking.findById(id);
    if (book.status === BOOKING_STATUS.COMPLETED) {
      res
        .status(400)
        .json({ success: true, message: "this booking is already completed" });
    } else if (book.status === BOOKING_STATUS.CANCELLED) {
      res
        .status(400)
        .json({ success: true, message: "this booking is already cancelled" });
    } else {
      book.status = BOOKING_STATUS.CANCELLED;
      await book.save();
      res.status(200).json({ success: true, message: "booking cancelled" });
    }
  } catch (err) {
    res.status(404).json({ success: true, message: "not found" });
  }
};
