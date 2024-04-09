import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    // after creating a new review now update the reviews array of the tour
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: savedReview });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to submit" });
  }
};

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("productId");
    res.status(200).json({ success: true, data: reviews });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed to fetch reviews" });
  }
};

export const deleteReview = async (req, res) => {
  const reviewId = req.params?.reviewId;
  try {
    await Review.findByIdAndDelete(reviewId);
    res.status(200).json({ success: true, message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to delete" });
  }
};