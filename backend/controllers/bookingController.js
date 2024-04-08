import Booking from "../models/Booking.js";
import { BOOKING_STATUS, ROW_PER_PAGE } from "../data/index.js";
import sendMail from "../config/nodemailer.js"
import User from "../models/User.js";

// create new booking
export const createBooking = async (req, res) => {
  const { tourId, guestSize, phone, payment, guideId, planeTicketId } =
    req.body;
  const newBooking = new Booking({
    userId: req.user.id,
    tourId,
    guideId,
    planeTicketId,
    guestSize,
    phone,
    payment,
    status: BOOKING_STATUS.PENDING,
  });
  try {
    const user = await User.findById(req.user.id);
    const savedBooking = await newBooking.save();
    const emailInfo = await sendMail({
      to: user.email,
      subject: "Booking Confirmation for MERN Tours",
      text: `Your booking is confirmed for ${savedBooking.createdAt}`,
    });
    res.status(200).json({
      success: true,
      message: "your tour is booked and email is sent to your email",
      data: savedBooking,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: true, message: err.message });
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
    res.status(404).json({ success: true, message: "Booking not found" });
  }
};

// get all booking
export const getAllBooking = async (req, res) => {
  try {
    // queries all the bookings by status
    let { status, page, limit } = req.query;
    const bookingStatus = status?.trim();
    limit = parseInt(limit) || ROW_PER_PAGE;
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
        .populate("guideId", "firstName lastName email phone")
        .populate("planeTicketId", "departureAirport arrivalAirport")
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
    res.status(404).json({ success: true, message: "Booking not found for Cancellation" });
  }
};

export const getMyBooking = async (req, res) => {
  try {
    console.log(req.user)
    const limit = parseInt(req.query.limit) || ROW_PER_PAGE;
    const page = (parseInt(req.query.page) - 1 || 0) * limit;
    const books = await Booking.find({ userId: req.user?.id })
      .populate("tourId", "title city address")
      .populate("guideId", "firstName lastName email phone")
      .populate("planeTicketId", "departureAirport arrivalAirport")
      .populate("userId", "username email role")
      .sort({ createdAt: -1 })
      .skip(page)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "successful",
      data: books,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: "internal server error" });
  }
};

export const getBookingByUserId = async (req, res) => {
  const userId = req.params?.id;
  if (!userId)
    return res
      .status(400)
      .json({ success: false, message: "userId is required" });

  try {
    const books = await Booking.find({ userId })
      .populate("tourId", "title city address")
      .populate("guideId", "firstName lastName email phone")
      .populate("planeTicketId", "departureAirport arrivalAirport")
      .populate("userId", "username email role")
      .sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "successful",
      data: books,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: "internal server error" });
  }
};