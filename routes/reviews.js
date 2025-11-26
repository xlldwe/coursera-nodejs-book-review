import express from "express";
import { authRequired } from "../middleware/authMiddleware.js";
import {addReview, updateReview, deleteReview,} from "../controllers/reviewsController.js";

const router = express.Router();

router.post("/:isbn", authRequired, addReview);
router.put("/:isbn", authRequired, updateReview);
router.delete("/:isbn", authRequired, deleteReview);

export default router;
