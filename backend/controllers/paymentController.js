import Payment from "../models/Payment.js";
import { PAYMENT_TYPE, ROW_PER_PAGE } from "../data/index.js";

export const getPayments = async (req, res) => {
  try {
    const paymentType = req.query.type?.trim();
    const limit = parseInt(req.query.limit) || ROW_PER_PAGE;
    const page = (parseInt(req.query.page) - 1 || 0) * limit;
    let payments;
    if (paymentType === PAYMENT_TYPE.TOUR) {
      payments = await Payment.find({ isTour: true }).skip(page).limit(limit);
    } else if (paymentType === PAYMENT_TYPE.PLANE_TICKET) {
      payments = await Payment.find({ isPlaneTicket: true })
        .skip(page)
        .limit(limit);
    } else if (paymentType === PAYMENT_TYPE.GUIDE_SERVICE) {
      payments = await Payment.find({ isGuideService: true })
        .skip(page)
        .limit(limit);
    } else {
      payments = await Payment.find().skip(page).limit(limit);
    }
    res.status(200).json(payments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPlaneTicketPaymentsById = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || ROW_PER_PAGE;
    const page = (parseInt(req.query.page) - 1 || 0) * limit;
    const payments = await Payment.find({
      isPlaneTicket: true,
      planeTicketId: req.params?.id,
    })
      .skip(page)
      .limit(limit);
    res.status(200).json(payments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTourPaymentsById = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || ROW_PER_PAGE;
    const page = (parseInt(req.query.page) - 1 || 0) * limit;
    const payments = await Payment.find({
      isTour: true,
      tourId: req.params?.id,
    })
      .skip(page)
      .limit(limit);
    res.status(200).json(payments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGuideServicePaymentsById = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || ROW_PER_PAGE;
    const page = (parseInt(req.query.page) - 1 || 0) * limit;
    const payments = await Payment.find({
      isGuideService: true,
      guideServiceId: req.params?.id,
    })
      .skip(page)
      .limit(limit);
    res.status(200).json(payments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params?.id);
    res.status(200).json(payment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const makePayment = async (req, res) => {
  const {
    isTour,
    tourId,
    isPlaneTicket,
    planeTicketId,
    isGuideService,
    guideServiceId,
    paymentAmount,
  } = req.body;
  const newPayment = new Payment({
    userId: req.user?.id,
    isTour,
    tourId,
    isPlaneTicket,
    planeTicketId,
    isGuideService,
    guideServiceId,
    paymentAmount,
  });
  try {
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getMyPayments = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || ROW_PER_PAGE;
    const page = (parseInt(req.query.page) - 1 || 0) * limit;
    const payments = await Payment.find({ userId: req.user?.id })
      .skip(page)
      .limit(limit);
    res.status(200).json(payments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPaymentByUserId = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || ROW_PER_PAGE;
    const page = (parseInt(req.query.page) - 1 || 0) * limit;
    const payments = await Payment.find({ userId: req.params?.id })
      .skip(page)
      .limit(limit);
    res.status(200).json(payments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};