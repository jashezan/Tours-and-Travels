import { ROW_PER_PAGE } from "../data/index.js";
import Guide from "../models/Guide.js";

export const getAvailableGuides = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || ROW_PER_PAGE;
    const page = (parseInt(req.query.page) - 1 || 0) * limit;
    const guides = await Guide.find().skip(page).limit(limit);
    res.status(200).json(guides);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGuideById = async (req, res) => {
  try {
    const guide = await Guide.findById(req.params?.id);
    res.status(200).json(guide);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createGuide = async (req, res) => {
  const { pricePerHour, rating, firstName, lastName, email, phone, image } =
    req.body;
  const newGuide = new Guide({
    pricePerHour,
    rating,
    firstName,
    lastName,
    email,
    phone,
    image,
  });
  try {
    await newGuide.save();
    res.status(201).json(newGuide);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteGuide = async (req, res) => {
  try {
    await Guide.findByIdAndDelete(req.params?.id);
    res.status(200).json({ message: "Guide deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};