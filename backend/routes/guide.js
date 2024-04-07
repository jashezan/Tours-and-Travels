import { Router } from "express";
import {
  getAvailableGuides,
  getGuideById,
  createGuide,
  deleteGuide,
} from "../controllers/guideController.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = Router();
router.get("/", getAvailableGuides); // queries: limit, page
router.get("/:id", getGuideById);
router.post("/", verifyToken, verifyAdmin, createGuide);
router.delete("/:id", verifyToken, verifyAdmin, deleteGuide);

export default router;
