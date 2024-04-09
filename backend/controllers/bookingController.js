import Booking from "../models/Booking.js";
import {
  BOOKING_QUERY_TYPE,
  BOOKING_STATUS,
  ROW_PER_PAGE,
} from "../data/index.js";
import sendMail from "../config/nodemailer.js";
import User from "../models/User.js";
import PlaneTicket from "../models/PlaneTicket.js";

/** @type {import('express').RequestHandler}  */
export const makeBooking = async (req, res) => {
  const { tourId, guestSize, phone, payment, guideId, planeTicketId } =
    req.body;
  const newBooking = new Booking({
    userId: req.user?.id,
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
      extra: emailInfo?.response || null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: true, message: err.message });
  }
};

// get single booking
/** @type {import('express').RequestHandler}  */
export const getBookingById = async (req, res) => {
  const id = req.params?.id;
  if (!id)
    return res.status(400).json({ success: false, message: "id is required" });

  try {
    const book = await Booking.findById(id)
      .populate("userId")
      .populate("tourId")
      .populate("guideId")
      .populate("planeTicketId");
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
/** @type {import('express').RequestHandler}  */
export const getAllBooking = async (req, res) => {
  try {
    // queries all the bookings by status
    let { status, page, limit, type } = req.query;
    let queries = {};
    if (status) queries.status = status?.trim().toUpperCase();
    if (type?.trim().toLowerCase() === BOOKING_QUERY_TYPE.PLANE_TICKET) {
      queries.planeTicketId = { $ne: null };
    } else if (type?.trim().toLowerCase() === BOOKING_QUERY_TYPE.TOUR) {
      queries.tourId = { $ne: null };
    } else if (type?.trim().toLowerCase() === BOOKING_QUERY_TYPE.GUIDE) {
      queries.guideId = { $ne: null };
    } else {
      queries = queries;
    }
    limit = parseInt(limit) || ROW_PER_PAGE;
    page = (parseInt(page) - 1 || 0) * limit;
    const books = await Booking.find(queries)
      .populate("tourId", "title city address")
      .populate("guideId", "firstName lastName email phone")
      .populate("planeTicketId", "departureAirport arrivalAirport")
      .populate("userId", "username email role photo")
      .sort({ createdAt: -1 }) // Sort by creation date descending
      .skip(page)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "successful",
      data: books,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: err?.message });
  }
};

// cancel booking
/** @type {import('express').RequestHandler}  */
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
    res
      .status(404)
      .json({ success: true, message: "Booking not found for Cancellation" });
  }
};

/** @type {import('express').RequestHandler}  */
export const getMyBooking = async (req, res) => {
  try {
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
    res.status(500).json({ success: true, message: err?.message });
  }
};

/** @type {import('express').RequestHandler}  */
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
    res.status(500).json({ success: true, message: err?.message });
  }
};

/** @type {import('express').RequestHandler}  */
export const makePayment = async (req, res) => {
  const id = req.params?.id;
  const { paymentAmount, tourId, planeTicketId, guideId } = req.body;
  if (!id)
    return res
      .status(400)
      .json({ success: false, message: "booking id is required" });

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
    } else if (book.paymentAmount !== null) {
      res.status(400).json({ success: true, message: "Payment already made" });
    } else {
      book.paymentAmount = paymentAmount;
      book.guideId = book.guideId || guideId;
      book.tourId = book.tourId || tourId;
      book.planeTicketId = book.planeTicketId || planeTicketId;
      await book.save();
      res
        .status(204)
        .json({ success: true, message: "payment completed successfully" });
    }
  } catch (err) {
    res
      .status(404)
      .json({ success: true, message: "Booking not found for Cancellation" });
  }
};

/** @type {import('express').RequestHandler}  */
export const getAllPlaneTicket = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || ROW_PER_PAGE;
    const page = (parseInt(req.query.page) - 1 || 0) * limit;
    const planeTickets = await PlaneTicket.find()
      .sort({ createdAt: -1 })
      .skip(page)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "successful",
      data: planeTickets,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: err?.message });
  }
};